<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AnchorPoint`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AnchorPoint

**命名空间:** TaleWorlds.CampaignSystem.Naval
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`AnchorPoint` 是 `TaleWorlds.CampaignSystem.Naval` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public void CallFleet(Settlement settlement)
```

### SetPosition

```csharp
public void SetPosition(CampaignVec2 position)
```

### SetSettlement

```csharp
public void SetSettlement(Settlement settlement)
```

### InitializeOnLoad

```csharp
public void InitializeOnLoad(MobileParty owner)
```

### CanPartyInteract

```csharp
public bool CanPartyInteract(MobileParty mobileParty, float dt)
```

### SetLastUsedDisembarkPosition

```csharp
public void SetLastUsedDisembarkPosition(CampaignVec2 pos)
```

### GetLastUsedDisembarkPosition

```csharp
public CampaignVec2 GetLastUsedDisembarkPosition()
```

### GetInteractionPosition

```csharp
public CampaignVec2 GetInteractionPosition(MobileParty interactingParty)
```

### OnPartyInteraction

```csharp
public void OnPartyInteraction(MobileParty mobileParty)
```

### GetPosition

```csharp
public Vec3 GetPosition()
```

### IsAtSettlement

```csharp
public bool IsAtSettlement(Settlement settlement)
```

### IsTargetingSettlement

```csharp
public bool IsTargetingSettlement(Settlement settlement)
```

### CheckPositionsForMapChangeAndUpdateIfNeeded

```csharp
public void CheckPositionsForMapChangeAndUpdateIfNeeded()
```

### ResetPosition

```csharp
public void ResetPosition()
```

### ResetMoveTarget

```csharp
public void ResetMoveTarget()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)