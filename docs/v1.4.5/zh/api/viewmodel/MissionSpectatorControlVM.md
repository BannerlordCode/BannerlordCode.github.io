<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSpectatorControlVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionSpectatorControlVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSpectatorControlVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionSpectatorControlVM.cs`

## 概述

`MissionSpectatorControlVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `PrevCharacterText` | `public string PrevCharacterText { get; set; }` |
| `NextCharacterText` | `public string NextCharacterText { get; set; }` |
| `TakeControlText` | `public string TakeControlText { get; set; }` |
| `StatusText` | `public string StatusText { get; set; }` |
| `IsTakeControlRelevant` | `public bool IsTakeControlRelevant { get; set; }` |
| `IsTakeControlEnabled` | `public bool IsTakeControlEnabled { get; set; }` |
| `SpectatedAgentName` | `public string SpectatedAgentName { get; set; }` |
| `PrevCharacterKey` | `public InputKeyItemVM PrevCharacterKey { get; set; }` |
| `NextCharacterKey` | `public InputKeyItemVM NextCharacterKey { get; set; }` |
| `TakeControlKey` | `public InputKeyItemVM TakeControlKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnSpectatedAgentFocusIn
`public void OnSpectatedAgentFocusIn(Agent followedAgent)`

**用途 / Purpose:** 当 `spectated agent focus in` 事件触发时调用此方法。

### OnSpectatedAgentFocusOut
`public void OnSpectatedAgentFocusOut(Agent followedAgent)`

**用途 / Purpose:** 当 `spectated agent focus out` 事件触发时调用此方法。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetMainAgentStatus
`public void SetMainAgentStatus(bool isDead)`

**用途 / Purpose:** 设置 `main agent status` 的值或状态。

### SetPrevCharacterInputKey
`public void SetPrevCharacterInputKey(GameKey gameKey)`

**用途 / Purpose:** 设置 `prev character input key` 的值或状态。

### SetNextCharacterInputKey
`public void SetNextCharacterInputKey(GameKey gameKey)`

**用途 / Purpose:** 设置 `next character input key` 的值或状态。

### SetTakeControlInputKey
`public void SetTakeControlInputKey(GameKey gameKey)`

**用途 / Purpose:** 设置 `take control input key` 的值或状态。

## 使用示例

```csharp
var value = new MissionSpectatorControlVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)