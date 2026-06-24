<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerAdminPanelOptionBaseVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerAdminPanelOptionBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MultiplayerAdminPanelOptionBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelOptionBaseVM.cs`

## 概述

`MultiplayerAdminPanelOptionBaseVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsRequired` | `public bool IsRequired { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsDirty` | `public bool IsDirty { get; set; }` |
| `CanResetToDefault` | `public bool CanResetToDefault { get; set; }` |
| `IsFilteredOut` | `public bool IsFilteredOut { get; set; }` |
| `RequiresRestart` | `public bool RequiresRestart { get; set; }` |
| `OptionTitle` | `public string OptionTitle { get; set; }` |
| `OptionDescription` | `public string OptionDescription { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `DescriptionHint` | `public HintViewModel DescriptionHint { get; set; }` |
| `RequiresRestartHint` | `public HintViewModel RequiresRestartHint { get; set; }` |
| `IsDirtyHint` | `public HintViewModel IsDirtyHint { get; set; }` |
| `RestoreToDefaultsHint` | `public HintViewModel RestoreToDefaultsHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### UpdateValues
`public virtual void UpdateValues()`

**用途 / Purpose:** 更新 `values` 的状态或数据。

### ExecuteRevertChanges
`public virtual void ExecuteRevertChanges()`

**用途 / Purpose:** 执行 `revert changes` 操作或流程。

### ExecuteRestoreDefaults
`public virtual void ExecuteRestoreDefaults()`

**用途 / Purpose:** 执行 `restore defaults` 操作或流程。

## 使用示例

```csharp
var implementation = new CustomMultiplayerAdminPanelOptionBaseVM();
```

## 参见

- [完整类目录](../catalog)