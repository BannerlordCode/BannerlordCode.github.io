<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PolicyObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PolicyObject

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** public sealed class PolicyObject : PropertyObject
**Base:** `PropertyObject`
**File:** `TaleWorlds.CampaignSystem/PolicyObject.cs`

## Overview

`PolicyObject` represents a kingdom policy (an active/inactive law affecting kingdom mechanics). All policies are available via the static `All` list and are typically referenced from XML. Mods query active policies on a kingdom (`Kingdom.ActivePolicies`) and add/remove them to change kingdom behavior.

## Key Properties

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<PolicyObject> All { get { return Campaign.Current.AllPolicies; }` |

## Key Methods

### Initialize
```csharp
public void Initialize(TextObject name, TextObject description, TextObject logEntryDescription, TextObject secondaryEffects, float authoritarianWeight, float oligarchyWeight, float egalitarianWeight)
```

### ToString
```csharp
public override string ToString()
```

## Usage Example

```csharp
// Find a policy by id and check whether the player's kingdom has it active
PolicyObject policy = PolicyObject.All.FirstOrDefault(p => p.StringId == "demesne_rights");
Kingdom k = Clan.PlayerClan.Kingdom;
if (policy != null && k != null)
{
    bool active = k.ActivePolicies.Contains(policy);
    InformationManager.DisplayMessage(new InformationMessage(
        $"{policy.Name} is {(active ? "active" : "inactive")} in {k.Name}"));
}
```

## See Also

- [Complete Class Catalog](../catalog)