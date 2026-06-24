<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentInteractionInterfaceVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AgentInteractionInterfaceVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentInteractionInterfaceVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction/AgentInteractionInterfaceVM.cs`

## 概述

`AgentInteractionInterfaceVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TargetHealth` | `public int TargetHealth { get; set; }` |
| `ShowHealthBar` | `public bool ShowHealthBar { get; set; }` |
| `PrimaryInteractionMessages` | `public MBBindingList<MissionPrimaryInteractionItemVM> PrimaryInteractionMessages { get; set; }` |
| `SecondaryInteractionMessages` | `public MBBindingList<MissionInteractionItemBaseVM> SecondaryInteractionMessages { get; set; }` |
| `BackgroundColor` | `public string BackgroundColor { get; set; }` |
| `TextColor` | `public string TextColor { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `HasSecondaryMessages` | `public bool HasSecondaryMessages { get; set; }` |
| `DisplayInteractionText` | `public bool DisplayInteractionText { get; set; }` |
| `ForcedInteractionMessages` | `public MBBindingList<MissionPrimaryInteractionItemVM> ForcedInteractionMessages { get; set; }` |
| `HasForcedMessages` | `public bool HasForcedMessages { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnFocusedHealthChanged
`public void OnFocusedHealthChanged(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)`

**用途 / Purpose:** 当 `focused health changed` 事件触发时调用此方法。

### OnActiveMissionHintChanged
`public void OnActiveMissionHintChanged(MissionHint previousHint, MissionHint newHint)`

**用途 / Purpose:** 当 `active mission hint changed` 事件触发时调用此方法。

### AddSecondaryMessage
`public void AddSecondaryMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** 向当前集合/状态中添加 `secondary message`。

### RemoveSecondaryMessage
`public bool RemoveSecondaryMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** 从当前集合/状态中移除 `secondary message`。

### HasSecondaryInteractionMessage
`public bool HasSecondaryInteractionMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `secondary interaction message`。

### ResetFocus
`public void ResetFocus()`

**用途 / Purpose:** 将 `focus` 重置为初始状态。

### SetForcedInteractionTexts
`public void SetForcedInteractionTexts(TextObject text1, bool isDisabled1, TextObject text2, bool isDisabled2)`

**用途 / Purpose:** 设置 `forced interaction texts` 的值或状态。

### ClearForcedInteractionTexts
`public void ClearForcedInteractionTexts()`

**用途 / Purpose:** 处理 `clear forced interaction texts` 相关逻辑。

## 使用示例

```csharp
AgentInteractionInterfaceVM implementation = GetAgentInteractionInterfaceVMImplementation();
```

## 参见

- [完整类目录](../catalog)