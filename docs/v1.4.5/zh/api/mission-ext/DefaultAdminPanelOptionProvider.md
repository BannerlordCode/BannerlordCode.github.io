<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultAdminPanelOptionProvider`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultAdminPanelOptionProvider

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultAdminPanelOptionProvider : IAdminPanelOptionProvider`
**Base:** `IAdminPanelOptionProvider`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/DefaultAdminPanelOptionProvider.cs`

## 概述

`DefaultAdminPanelOptionProvider` 位于 `TaleWorlds.MountAndBlade.Multiplayer.Admin`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

### GetOptionWithId
`public IAdminPanelOption GetOptionWithId(string id)`

**用途 / Purpose:** 获取 `option with id` 的当前值。

### GetActionWithId
`public IAdminPanelAction GetActionWithId(string id)`

**用途 / Purpose:** 获取 `action with id` 的当前值。

### ApplyOptions
`public void ApplyOptions()`

**用途 / Purpose:** 将 `options` 应用到当前对象。

### GetOptionGroups
`public MBReadOnlyList<IAdminPanelOptionGroup> GetOptionGroups()`

**用途 / Purpose:** 获取 `option groups` 的当前值。

## 使用示例

```csharp
var value = new DefaultAdminPanelOptionProvider();
value.BuildAvailableOptions(options);
```

## 参见

- [完整类目录](../catalog)