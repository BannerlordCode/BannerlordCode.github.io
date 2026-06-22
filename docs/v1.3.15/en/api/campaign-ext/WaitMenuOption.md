<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WaitMenuOption`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WaitMenuOption

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `WaitMenuOption` is a class in the `TaleWorlds.CampaignSystem.GameMenus` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Priority` | `public int Priority { get; }` |
| `Text` | `public TextObject Text { get; }` |
| `IdString` | `public string IdString { get; }` |
| `Tooltip` | `public string Tooltip { get; }` |
| `IsLeave` | `public bool IsLeave { get; }` |


## Key Methods

### GetConditionsHold

```csharp
public bool GetConditionsHold(Game game, MapState mapState)
```

### RunConsequence

```csharp
public void RunConsequence(Game game, MapState mapState)
```

### Deserialize

```csharp
public void Deserialize(XmlNode node, Type typeOfWaitMenusCallbacks)
```

### OnConditionDelegate

```csharp
public delegate bool OnConditionDelegate(MenuCallbackArgs args)
```

### OnConsequenceDelegate

```csharp
public delegate void OnConsequenceDelegate(MenuCallbackArgs args)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)