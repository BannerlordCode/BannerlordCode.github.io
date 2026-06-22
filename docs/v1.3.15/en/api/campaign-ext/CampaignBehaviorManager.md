<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignBehaviorManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignBehaviorManager

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignBehaviorManager : ICampaignBehaviorManager`
**Base:** `ICampaignBehaviorManager`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CampaignBehaviorManager.cs`

## Overview

`CampaignBehaviorManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### InitializeCampaignBehaviors
```csharp
public void InitializeCampaignBehaviors(IEnumerable<CampaignBehaviorBase> inputComponents)
```

### RegisterEvents
```csharp
public void RegisterEvents()
```

### LoadBehaviorData
```csharp
public void LoadBehaviorData()
```

### AddBehavior
```csharp
public void AddBehavior(CampaignBehaviorBase campaignBehavior)
```

### ClearBehaviors
```csharp
public void ClearBehaviors()
```

## Usage Example

```csharp
// Typical usage of CampaignBehaviorManager (Manager)
CampaignBehaviorManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)