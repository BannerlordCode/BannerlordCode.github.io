<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPDeathCardVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPDeathCardVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPDeathCardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MPDeathCardVM.cs`

## 概述

`MPDeathCardVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsSelfInflicted` | `public bool IsSelfInflicted { get; set; }` |
| `KillCountsEnabled` | `public bool KillCountsEnabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `UsedWeaponName` | `public string UsedWeaponName { get; set; }` |
| `KillerName` | `public string KillerName { get; set; }` |
| `KillerText` | `public string KillerText { get; set; }` |
| `YouText` | `public string YouText { get; set; }` |
| `PlayerProperties` | `public MPPlayerVM PlayerProperties { get; set; }` |
| `BodyPartHit` | `public int BodyPartHit { get; set; }` |
| `NumOfTimesPlayerKilled` | `public int NumOfTimesPlayerKilled { get; set; }` |
| `NumOfTimesPlayerGotKilled` | `public int NumOfTimesPlayerGotKilled { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnMainAgentRemoved
`public void OnMainAgentRemoved(Agent affectorAgent, KillingBlow blow)`

**用途 / Purpose:** 当 `main agent removed` 事件触发时调用此方法。

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** 处理 `deactivate` 相关逻辑。

## 使用示例

```csharp
var value = new MPDeathCardVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)