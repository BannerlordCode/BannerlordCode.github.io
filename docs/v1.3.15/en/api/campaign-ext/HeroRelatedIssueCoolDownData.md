<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroRelatedIssueCoolDownData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroRelatedIssueCoolDownData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroRelatedIssueCoolDownData : IssueCoolDownData`
**Base:** `IssueCoolDownData`
**File:** `TaleWorlds.CampaignSystem/Issues/HeroRelatedIssueCoolDownData.cs`

## Overview

`HeroRelatedIssueCoolDownData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### IsRelatedTo
```csharp
public override bool IsRelatedTo(object obj)
```

### IsValid
```csharp
public override bool IsValid()
```

## Usage Example

```csharp
// Typical usage of HeroRelatedIssueCoolDownData (Data)
new HeroRelatedIssueCoolDownData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)