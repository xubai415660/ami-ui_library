<template>
  <div class="configurator-action">
      <div class="action-group">
        <ami-tooltip :content="getActionDisplayName('undo')">
          <img
              src="../../assets/images/icon-undo.svg"
              @click="onUndo"
              :class="{ 'active': userConfigHistory.length > 0 }"
          />
        </ami-tooltip>
        <ami-tooltip :content="getActionDisplayName('redo')">
          <img
              src="../../assets/images/icon-redo.svg"
              @click="onRedo"
              :class="{ 'active': userConfigRedoHistory.length > 0 }"
          />
        </ami-tooltip>
        <div class="button-group">
          <ami-button
              class="reset"
              round
              type="primary"
              size="mini"
              :disabled="isOfficial"
              @click="onReset"
          >
            {{ getActionDisplayName('reset-theme') }}
          </ami-button>
          <ami-button
              class="download"
              round
              type="primary"
              size="mini"
              :disabled="downloadDisabled"
              @click="onDownload"
          >
            {{ getActionDisplayName('download-theme') }}
          </ami-button>
        </div>
      </div>
    <ami-select v-model="selectedComponent" class="selector">
      <ami-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </ami-option>
    </ami-select>
    <div class="line"></div>
  </div>
</template>

<style lang="scss">
.configurator-action {
  padding: 15px 18px 0;
  .action-group {
    padding: 5px 0;
    img {
      cursor: not-allowed;
      width: 16px;
      height: 16px;
      padding: 7px 0;
      margin-left: 5px;
      opacity: .5;
      &.active {
        opacity: 1;
        cursor: pointer;
      }
      &:last-of-type {
        margin-left: 10px;
      }
    }
    .button-group {
      float: right;

      .ami-button {
        padding: 6px 15px;

        &.is-disabled {
          color: #C0C4CC;
          background-color: #fff;
          border-color: #EBEEF5;
        }
      }

      .reset {
        background: #E6F1FC;
        color: #0040D1;
        border-color: #A2CFFC;
      }
      .download {
        background: #0040D1;
        color: #FFF;
        border-color: #0040D1
      }
    }
  }
  .selector {
    width: 100%;
    input {
      background: #f5f7fa;
      border: none;
      font-size: 18px;
      padding-left: 0;
      color: #606266;
    }
  }
  .line {
    width: 100%;
    height: 0;
    border-bottom: 1px solid #DCDFE6;
  }
}
</style>

<script>
import { getActionDisplayName } from './utils/utils';
export default {
  props: {
    selectOptions: Array,
    userConfigHistory: Array,
    userConfigRedoHistory: Array,
    isOfficial: Boolean,
    onUndo: Function,
    onRedo: Function
  },
  data() {
    return {
      selectedComponent: 'color',
      downloadDisabled: false
    };
  },
  watch: {
    selectedComponent: {
      handler(val) {
        this.$emit('select', val);
      }
    }
  },
  methods: {
    getActionDisplayName(key) {
      return getActionDisplayName(key);
    },
    onReset() {
      this.$parent.onReset();
    },
    onDownload() {
      this.downloadDisabled = true;
      this.$parent.onDownload();
      setTimeout(() => {
        this.downloadDisabled = false;
      }, 2500);
    }
  }
};
</script>
