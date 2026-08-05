---
title: "LocationComplexTemplate"
description: "LocationComplexTemplate is the XML-backed object-system definition from which settlement LocationComplex graphs are constructed."
---
# LocationComplexTemplate

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public sealed class LocationComplexTemplate : MBObjectBase`  
**Base:** [MBObjectBase](../../core/MBObjectBase)  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Locations/LocationComplexTemplate.cs`

## One-sentence responsibility

It parses a `LocationComplexTemplates` XML object into template `Location` nodes and string-based passage pairs that `Settlement` later turns into a live [LocationComplex](../LocationComplex).

## Mental Model

This is a data-definition boundary, not the active settlement graph. `Locations` contains template `Location` objects whose owner complex is still null; `Passages` contains pairs of string IDs such as `center` and `tavern`. The [LocationComplex](../LocationComplex) constructor copies those nodes into a new owner graph and then resolves the passage IDs.

The load chain is explicit: `Campaign` registers `LocationComplexTemplate` with `MBObjectManager`, `SandBoxManager.InitializeSandboxXMLs` loads `LocationComplexTemplates`, and `Settlement.Deserialize` reads a `complex_template` reference. New settlements construct a complex from the template; saved campaigns call `LocationComplex.Initialize` and then apply settlement-specific scene overrides. A mod should therefore edit or extend the XML/data pipeline intentionally, not mutate a template as if it were one settlement's runtime state.

## When to use and when not to use

- Use `MBObjectManager.GetObjectTypeList<LocationComplexTemplate>()` or the object manager's typed lookup to inspect loaded definitions after Sandbox XML initialization.
- Use the template to understand which location IDs, scene variants, access expressions, and passage pairs a settlement complex can contain.
- Use [Settlement](../Settlement).`LocationComplex` for runtime character and scene operations; the template is not the object returned by `LocationComplex.Current`.
- Do not call `Deserialize` manually or construct a `Location` template with an arbitrary null graph expecting it to become a live node.
- Do not mutate `Locations` or `Passages` during an active encounter. Existing complexes have already copied the data, and changing the source object will not safely rebuild them.

## Dependencies

```text
Campaign.RegisterType<LocationComplexTemplate>
  -> SandBoxManager.LoadXML("LocationComplexTemplates")
  -> MBObjectManager object reference from Settlement XML
  -> LocationComplexTemplate.Deserialize
  -> new LocationComplex(template) / LocationComplex.Initialize(template)
  -> Settlement.LocationComplex
```

- Object system: [MBObjectBase](../../core/MBObjectBase) and [MBObjectManager](../../campaign-ext/MBObjectManager) own registration and lookup.
- Runtime graph: [LocationComplex](../LocationComplex) copies locations and resolves passages.
- Node data: [Location](../Location) receives names, access expressions, prosperity caps, indoor flags, and four scene names.
- Campaign owner: [Settlement](../Settlement) reads the template reference and applies per-settlement overrides.
- Mission consumer: [CampaignMission](../CampaignMission) and [MissionAgentHandler](../../campaign-ext/MissionAgentHandler) use the resulting live graph, not the template itself.

## Parsed members and XML contract

| Member or input | Meaning |
|---|---|
| `Locations` | Public list of template nodes. Each `<Location>` supplies `id`, `name`, `max_prosperity`, `indoor`, `player_can_enter`, `player_can_see`, `ai_can_exit`, `ai_can_enter`, and up to four scene-name attributes. |
| `Passages` | Public list of `(location_1, location_2)` string pairs from `<Passages><Passage location_1="center" location_2="tavern" /></Passages>`. The live complex resolves each ID and adds a bidirectional link. |
| `Deserialize` | Calls `MBObjectBase.Deserialize`, parses child XML, constructs template `Location` objects, and records passage pairs. It is object-system lifecycle code, not a runtime refresh method. |
| Optional scene names | `scene_name`, `scene_name_1`, `scene_name_2`, and `scene_name_3` are stored as four slots; missing attributes become empty strings and the live `Location` later falls back to slot `0`. |
| Access expressions | The `player_can_*` and `ai_can_*` values are method names resolved by `Location` through reflection when access is first checked. They must name real delegates available in loaded assemblies. |

## Real example

After the campaign has loaded Sandbox XML, the object manager is the real acquisition path for inspecting definitions:

```csharp
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.Library;
using TaleWorlds.ObjectSystem;

MBReadOnlyList<LocationComplexTemplate> templates =
    MBObjectManager.Instance.GetObjectTypeList<LocationComplexTemplate>();

foreach (LocationComplexTemplate template in templates)
{
    int locationCount = template.Locations.Count;
    int passageCount = template.Passages.Count;
}
```

The runtime path does not stop at this inspection. `Settlement.Deserialize` reads a `complex_template` reference, then either calls `new LocationComplex(complexTemplate)` for a new campaign or `LocationComplex.Initialize(complexTemplate)` for a saved campaign before applying settlement-specific scene attributes.

## Risks and save boundaries

- Missing required XML attributes can throw during `Deserialize`; missing `node.Attributes` produces a `TWXmlLoadException`, while malformed values can fail during parsing.
- A passage pair that names an absent location is not a valid runtime graph edge. `LocationComplex` resolves both IDs before calling `AddPassage`.
- Access expression strings are executable lookup metadata. Renaming or removing the referenced static method can make a later `Location.Can*` call fail even though XML loaded successfully.
- Template objects describe shared source data. Mutating their public lists after settlements have constructed complexes does not retroactively update those complexes and can create inconsistent future construction.
- Saved campaigns reconstruct `LocationComplex` and apply overrides separately. Do not put transient Agent, scene, or Mission references in a template or assume the template is a save slot.

## Version note

This page follows v1.4.5 `LocationComplexTemplate.cs`, `Campaign` type registration, `SandBoxManager.InitializeSandboxXMLs`, and `Settlement.Deserialize`. XML attribute names, object-system IDs, and saved-campaign initialization are version-sensitive.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [Location](../Location) · [LocationComplex](../LocationComplex) · [LocationCharacter](../LocationCharacter)
- Related: [Settlement](../Settlement) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [MBObjectBase](../../core/MBObjectBase) · [CampaignMission](../CampaignMission)
