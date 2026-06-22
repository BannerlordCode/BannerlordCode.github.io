<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerCaptivity`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerCaptivity

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PlayerCaptivity` is a class in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CaptorParty` | `public static PartyBase CaptorParty { get; set; }` |
| `RandomNumber` | `public static float RandomNumber { get; set; }` |
| `IsCaptive` | `public static bool IsCaptive { get; }` |
| `CaptiveTimeInDays` | `public static int CaptiveTimeInDays { get; }` |
| `CaptivityStartTime` | `public static CampaignTime CaptivityStartTime { get; }` |
| `LastCheckTime` | `public static CampaignTime LastCheckTime { get; set; }` |


## Key Methods

### StartCaptivity

```csharp
public static void StartCaptivity(PartyBase captorParty)
```

### OnPlayerCharacterChanged

```csharp
public static void OnPlayerCharacterChanged()
```

### SetRansomAmount

```csharp
public void SetRansomAmount()
```

### EndCaptivity

```csharp
public static void EndCaptivity()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)