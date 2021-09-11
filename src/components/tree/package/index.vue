<template>
  <div>
    tree--tree
    <span>
      +++++{{ name }}+++++
    </span>
  </div>
</template>

<script>

import { t } from '../../../i18n/index'

export default {
  name: 'LvTree',
  data() {
    return {
      name: t('tree.name')
    }
  }
}
</script>
