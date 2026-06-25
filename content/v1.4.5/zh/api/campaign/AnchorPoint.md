---
title: "AnchorPoint"
description: "AnchorPoint 的自动生成类参考。"
---
# AnchorPoint

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AnchorPoint : IInteractablePoint, ITrackableCampaignObject, ITrackableBase`
**Base:** `IInteractablePoint`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Naval/AnchorPoint.cs`

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
| `ArrivalTime` | `public CampaignTime ArrivalTime { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `Name` | `public TextObject Name { get; }` |

## 主要方法

### CallFleet
`public void CallFleet(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CallFleet 对应的操作。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
anchorPoint.CallFleet(settlement);
```

### SetPosition
`public void SetPosition(CampaignVec2 position)`

**用途 / Purpose:** **用途 / Purpose:** 为 position 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
anchorPoint.SetPosition(position);
```

### SetSettlement
`public void SetSettlement(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 为 settlement 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
anchorPoint.SetSettlement(settlement);
```

### InitializeOnLoad
`public void InitializeOnLoad(MobileParty owner)`

**用途 / Purpose:** **用途 / Purpose:** 为 on load 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
anchorPoint.InitializeOnLoad(owner);
```

### CanPartyInteract
`public bool CanPartyInteract(MobileParty mobileParty, float dt)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 party interact 的前置条件。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
var result = anchorPoint.CanPartyInteract(mobileParty, 0);
```

### SetLastUsedDisembarkPosition
`public void SetLastUsedDisembarkPosition(CampaignVec2 pos)`

**用途 / Purpose:** **用途 / Purpose:** 为 last used disembark position 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
anchorPoint.SetLastUsedDisembarkPosition(pos);
```

### GetLastUsedDisembarkPosition
`public CampaignVec2 GetLastUsedDisembarkPosition()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 last used disembark position 的结果。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
var result = anchorPoint.GetLastUsedDisembarkPosition();
```

### GetInteractionPosition
`public CampaignVec2 GetInteractionPosition(MobileParty interactingParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 interaction position 的结果。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
var result = anchorPoint.GetInteractionPosition(interactingParty);
```

### OnPartyInteraction
`public void OnPartyInteraction(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 party interaction 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
anchorPoint.OnPartyInteraction(mobileParty);
```

### GetPosition
`public Vec3 GetPosition()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 position 的结果。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
var result = anchorPoint.GetPosition();
```

### IsAtSettlement
`public bool IsAtSettlement(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 at settlement 状态或条件。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
var result = anchorPoint.IsAtSettlement(settlement);
```

### IsTargetingSettlement
`public bool IsTargetingSettlement(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 targeting settlement 状态或条件。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
var result = anchorPoint.IsTargetingSettlement(settlement);
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**用途 / Purpose:** **用途 / Purpose:** 检查positions for map change and update if needed在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
anchorPoint.CheckPositionsForMapChangeAndUpdateIfNeeded();
```

### ResetPosition
`public void ResetPosition()`

**用途 / Purpose:** **用途 / Purpose:** 将 position 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
anchorPoint.ResetPosition();
```

### ResetMoveTarget
`public void ResetMoveTarget()`

**用途 / Purpose:** **用途 / Purpose:** 将 move target 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 AnchorPoint 实例
AnchorPoint anchorPoint = ...;
anchorPoint.ResetMoveTarget();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AnchorPoint anchorPoint = ...;
anchorPoint.CallFleet(settlement);
```

## 参见

- [本区域目录](../)