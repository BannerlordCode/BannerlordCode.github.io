<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AnchorPoint`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AnchorPoint

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AnchorPoint : IInteractablePoint, ITrackableCampaignObject, ITrackableBase`
**Base:** `IInteractablePoint`
**File:** `TaleWorlds.CampaignSystem/Naval/AnchorPoint.cs`

## 概述

`AnchorPoint` 位于 `TaleWorlds.CampaignSystem.Naval`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Naval` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Owner` | `public MobileParty Owner { get; }` |
| `Position` | `public CampaignVec2 Position { get; }` |
| `TargetPosition` | `public CampaignVec2 TargetPosition { get; }` |
| `IsMovingToPoint` | `public bool IsMovingToPoint { get; }` |
| `IsReady` | `public bool IsReady { get; }` |
| `ArrivalTime` | `public CampaignTime ArrivalTime { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Name` | `public TextObject Name { get; }` |

## 主要方法

### CallFleet
`public void CallFleet(Settlement settlement)`

**用途 / Purpose:** 处理 `call fleet` 相关逻辑。

### SetPosition
`public void SetPosition(CampaignVec2 position)`

**用途 / Purpose:** 设置 `position` 的值或状态。

### SetSettlement
`public void SetSettlement(Settlement settlement)`

**用途 / Purpose:** 设置 `settlement` 的值或状态。

### InitializeOnLoad
`public void InitializeOnLoad(MobileParty owner)`

**用途 / Purpose:** 初始化 `on load` 的状态、资源或绑定。

### CanPartyInteract
`public bool CanPartyInteract(MobileParty mobileParty, float dt)`

**用途 / Purpose:** 判断当前对象是否可以执行 `party interact`。

### SetLastUsedDisembarkPosition
`public void SetLastUsedDisembarkPosition(CampaignVec2 pos)`

**用途 / Purpose:** 设置 `last used disembark position` 的值或状态。

### GetInteractionPosition
`public CampaignVec2 GetInteractionPosition(MobileParty interactingParty)`

**用途 / Purpose:** 获取 `interaction position` 的当前值。

### OnPartyInteraction
`public void OnPartyInteraction(MobileParty mobileParty)`

**用途 / Purpose:** 当 `party interaction` 事件触发时调用此方法。

### GetPosition
`public Vec3 GetPosition()`

**用途 / Purpose:** 获取 `position` 的当前值。

### IsAtSettlement
`public bool IsAtSettlement(Settlement settlement)`

**用途 / Purpose:** 处理 `is at settlement` 相关逻辑。

### IsTargetingSettlement
`public bool IsTargetingSettlement(Settlement settlement)`

**用途 / Purpose:** 处理 `is targeting settlement` 相关逻辑。

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**用途 / Purpose:** 处理 `check positions for map change and update if needed` 相关逻辑。

### ResetPosition
`public void ResetPosition()`

**用途 / Purpose:** 将 `position` 重置为初始状态。

## 使用示例

```csharp
var value = new AnchorPoint();
value.CallFleet(settlement);
```

## 参见

- [完整类目录](../catalog)