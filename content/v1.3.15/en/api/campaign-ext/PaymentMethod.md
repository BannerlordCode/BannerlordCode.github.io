---
title: "PaymentMethod"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PaymentMethod`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PaymentMethod

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum PaymentMethod : uint`
**Base:** `uint`
**Area:** campaign-ext

## Overview

`PaymentMethod` lives in `TaleWorlds.CampaignSystem.ComponentInterfaces`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ComponentInterfaces` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `ExMachina` |
| `4096U` |
| `Gold` |
| `1U` |
| `Influence` |
| `2U` |
| `Punishment` |
| `4U` |
| `Execution` |

## Usage Example

```csharp
PaymentMethod example = PaymentMethod.ExMachina;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
