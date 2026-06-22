<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMainAgentCheerBarkControllerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMainAgentCheerBarkControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionMainAgentCheerBarkControllerVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `DisabledReasonText` | `public string DisabledReasonText { get; set; }` |
| `SelectedNodeText` | `public string SelectedNodeText { get; set; }` |
| `IsNodesCategories` | `public bool IsNodesCategories { get; set; }` |
| `Nodes` | `public MBBindingList<CheerBarkNodeItemVM> Nodes { get; set; }` |


## Key Methods

### OnFinalize

```csharp
public override void OnFinalize()
```

### SelectItem

```csharp
public void SelectItem(int itemIndex, int subNodeIndex = -1)
```

### ExecuteActivate

```csharp
public void ExecuteActivate()
```

### ExecuteDeactivate

```csharp
public void ExecuteDeactivate(bool applySelection)
```

### OnNodeFocused

```csharp
public void OnNodeFocused(CheerBarkNodeItemVM focusedNode)
```

### OnNodeTooltipToggled

```csharp
public void OnNodeTooltipToggled(CheerBarkNodeItemVM node)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)