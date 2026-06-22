<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Incident`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Incident

**Namespace:** TaleWorlds.CampaignSystem.Incidents
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Incident` is a class in the `TaleWorlds.CampaignSystem.Incidents` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public TextObject Title { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `Trigger` | `public IncidentsCampaignBehaviour.IncidentTrigger Trigger { get; }` |
| `Type` | `public IncidentsCampaignBehaviour.IncidentType Type { get; }` |
| `Cooldown` | `public CampaignTime Cooldown { get; }` |
| `NumOfOptions` | `public int NumOfOptions { get; }` |
| `Effects` | `public IReadOnlyList<IncidentEffect> Effects { get; }` |


## Key Methods

### Initialize

```csharp
public void Initialize(string title, string description, IncidentsCampaignBehaviour.IncidentTrigger trigger, IncidentsCampaignBehaviour.IncidentType type, CampaignTime cooldown, Func<TextObject, bool> condition)
```

### AddOption

```csharp
public void AddOption(string text, List<IncidentEffect> effects, Incident.IncidentOptionConditionDelegate condition = null, Incident.IncidentOptionConsequenceDelegate consequence = null)
```

### CanIncidentBeInvoked

```csharp
public bool CanIncidentBeInvoked()
```

### GetOptionText

```csharp
public TextObject GetOptionText(int index)
```

### GetOptionHint

```csharp
public List<TextObject> GetOptionHint(int index)
```

### InvokeOption

```csharp
public List<TextObject> InvokeOption(int index)
```

### IncidentOptionConditionDelegate

```csharp
public delegate bool IncidentOptionConditionDelegate(TextObject text)
```

### IncidentOptionConsequenceDelegate

```csharp
public delegate void IncidentOptionConsequenceDelegate()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)