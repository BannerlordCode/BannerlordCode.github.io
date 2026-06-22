<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Barterable`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Barterable

**命名空间:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Barterable` 是 `TaleWorlds.CampaignSystem.BarterSystem.Barterables` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `StringID` | `public abstract string StringID { get; }` |
| `OriginalOwner` | `public Hero OriginalOwner { get; }` |
| `OriginalParty` | `public PartyBase OriginalParty { get; }` |
| `Name` | `public abstract TextObject Name { get; }` |
| `MaxAmount` | `public virtual int MaxAmount { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `IsOffered` | `public bool IsOffered { get; set; }` |
| `IsContextDependent` | `public bool IsContextDependent { get; set; }` |
| `Group` | `public BarterGroup Group { get; set; }` |
| `LinkedBarterables` | `public MBReadOnlyList<Barterable> LinkedBarterables { get; }` |
| `Side` | `public Barterable.BarterSide Side { get; }` |


## 主要方法

### GetValueForFaction

```csharp
public int GetValueForFaction(IFaction faction)
```

### CheckBarterLink

```csharp
public virtual void CheckBarterLink(Barterable linkedBarterable)
```

### GetUnitValueForFaction

```csharp
public abstract int GetUnitValueForFaction(IFaction faction)
```

### SetIsOffered

```csharp
public void SetIsOffered(bool value)
```

### AddBarterLink

```csharp
public void AddBarterLink(Barterable barterable)
```

### Initialize

```csharp
public void Initialize(BarterGroup barterGroup, bool isContextDependent)
```

### IsCompatible

```csharp
public virtual bool IsCompatible(Barterable barterable)
```

### GetVisualIdentifier

```csharp
public abstract ImageIdentifier GetVisualIdentifier()
```

### GetEncyclopediaLink

```csharp
public virtual string GetEncyclopediaLink()
```

### Apply

```csharp
public abstract void Apply()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)