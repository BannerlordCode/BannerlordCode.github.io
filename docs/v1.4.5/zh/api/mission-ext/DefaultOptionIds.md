<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultOptionIds`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultOptionIds

**命名空间:** TaleWorlds.MountAndBlade.Multiplayer.Admin
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class DefaultOptionIds`
**领域:** mission-ext

## 概述

`DefaultOptionIds` 位于 `TaleWorlds.MountAndBlade.Multiplayer.Admin`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.Admin` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsUndecided` | `public bool IsUndecided { get; }` |

## 主要方法

### BuildAvailableOptions
`public override AdminPanelMultiSelectionOption BuildAvailableOptions(MBReadOnlyList<IAdminPanelMultiSelectionItem> options)`

**用途 / Purpose:** 处理 `build available options` 相关逻辑。

### BuildAvailableOptions
`public override AdminPanelMultiSelectionOption BuildAvailableOptions(OptionType optionType, bool buildDefaultValue = true)`

**用途 / Purpose:** 处理 `build available options` 相关逻辑。

### BuildOtherCultureOption
`public AdminPanelCultureOption BuildOtherCultureOption(AdminPanelCultureOption otherOption)`

**用途 / Purpose:** 处理 `build other culture option` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### BuildGameTypeOption
`public AdminPanelUsableMapsOption BuildGameTypeOption(AdminPanelVotableMultiSelectionOption gameTypeOption)`

**用途 / Purpose:** 处理 `build game type option` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### GetIsDisabled
`public override bool GetIsDisabled(out string reason)`

**用途 / Purpose:** 获取 `is disabled` 的当前值。

### BuildOptionGroups
`public AdminPanelStartMissionAction BuildOptionGroups(MBReadOnlyList<IAdminPanelOptionGroup> optionGroups)`

**用途 / Purpose:** 处理 `build option groups` 相关逻辑。

### GetIsDisabled
`public override bool GetIsDisabled(out string reason)`

**用途 / Purpose:** 获取 `is disabled` 的当前值。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### GetIsAvailable
`public override bool GetIsAvailable()`

**用途 / Purpose:** 获取 `is available` 的当前值。

### BuildGameTypeOption
`public AdminPanelGameTypeDependentNumericOption BuildGameTypeOption(AdminPanelVotableMultiSelectionOption gameTypeOption)`

**用途 / Purpose:** 处理 `build game type option` 相关逻辑。

### BuildInvalidGameTypes
`public AdminPanelGameTypeDependentNumericOption BuildInvalidGameTypes(string gameTypes)`

**用途 / Purpose:** 处理 `build invalid game types` 相关逻辑。

### BuildRequiredGameTypes
`public AdminPanelGameTypeDependentNumericOption BuildRequiredGameTypes(string gameTypes)`

**用途 / Purpose:** 处理 `build required game types` 相关逻辑。

### GetIsAvailable
`public override bool GetIsAvailable()`

**用途 / Purpose:** 获取 `is available` 的当前值。

### BuildGameTypeOption
`public AdminPanelGameTypeDependentAction BuildGameTypeOption(AdminPanelVotableMultiSelectionOption gameTypeOption)`

**用途 / Purpose:** 处理 `build game type option` 相关逻辑。

### BuildInvalidGameTypes
`public AdminPanelGameTypeDependentAction BuildInvalidGameTypes(string gameTypes)`

**用途 / Purpose:** 处理 `build invalid game types` 相关逻辑。

### BuildRequiredGameTypes
`public AdminPanelGameTypeDependentAction BuildRequiredGameTypes(string gameTypes)`

**用途 / Purpose:** 处理 `build required game types` 相关逻辑。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 DefaultOptionIds 实例，再调用它的公开方法
var value = new DefaultOptionIds();
value.BuildAvailableOptions(options);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
