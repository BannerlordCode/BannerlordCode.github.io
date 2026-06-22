<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanRoleItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanRoleItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClanRoleItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Role` | `public PartyRole Role { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Members` | `public MBBindingList<ClanRoleMemberItemVM> Members { get; set; }` |
| `EffectiveOwner` | `public ClanRoleMemberItemVM EffectiveOwner { get; set; }` |
| `NotAssignedHint` | `public HintViewModel NotAssignedHint { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `IsNotAssigned` | `public bool IsNotAssigned { get; set; }` |
| `HasEffects` | `public bool HasEffects { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `AssignedMemberEffects` | `public string AssignedMemberEffects { get; set; }` |
| `NoEffectText` | `public string NoEffectText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Refresh

```csharp
public void Refresh()
```

### ExecuteToggleRoleSelection

```csharp
public void ExecuteToggleRoleSelection()
```

### SetEnabled

```csharp
public void SetEnabled(bool enabled, TextObject disabledHint)
```

### Compare

```csharp
public int Compare(ClanRoleMemberItemVM x, ClanRoleMemberItemVM y)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)