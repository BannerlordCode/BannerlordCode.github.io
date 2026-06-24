<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeHeroes`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeHeroes

**Namespace:** StoryMode.StoryModeObjects
**Module:** StoryMode.StoryModeObjects
**Type:** `public class StoryModeHeroes`
**Base:** none
**File:** `StoryMode/StoryModeObjects/StoryModeHeroes.cs`

## Overview

`StoryModeHeroes` lives in `StoryMode.StoryModeObjects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.StoryModeObjects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ElderBrother` | `public static Hero ElderBrother { get; }` |
| `LittleBrother` | `public static Hero LittleBrother { get; }` |
| `LittleSister` | `public static Hero LittleSister { get; }` |
| `Tacitus` | `public static Hero Tacitus { get; }` |
| `Radagos` | `public static Hero Radagos { get; }` |
| `ImperialMentor` | `public static Hero ImperialMentor { get; }` |
| `AntiImperialMentor` | `public static Hero AntiImperialMentor { get; }` |
| `RadagosHenchman` | `public static Hero RadagosHenchman { get; }` |
| `MainHeroMother` | `public static Hero MainHeroMother { get; }` |
| `MainHeroFather` | `public static Hero MainHeroFather { get; }` |

## Usage Example

```csharp
var value = new StoryModeHeroes();
```

## See Also

- [Complete Class Catalog](../catalog)