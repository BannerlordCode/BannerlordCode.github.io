<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Track`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Track

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Track` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `GetPosition2D` | `public Vec2 GetPosition2D { get; set; }` |
| `Size` | `public int Size { get; set; }` |
| `IsDetected` | `public bool IsDetected { get; set; }` |
| `IsPointer` | `public bool IsPointer { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsExpired` | `public bool IsExpired { get; }` |
| `IsAlive` | `public bool IsAlive { get; }` |
| `Scale` | `public float Scale { get; }` |


## 主要方法

### CanPartyInteract

```csharp
public bool CanPartyInteract(MobileParty mobileParty, float dt)
```

### GetPartyTypeEnum

```csharp
public static Track.PartyTypeEnum GetPartyTypeEnum(MobileParty party)
```

### Reset

```csharp
public void Reset()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)