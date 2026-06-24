<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionType`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionType

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum OptionType`
**Area:** mission-ext

## Overview

`OptionType` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `ServerName` |
| `WelcomeMessage` |
| `GamePassword` |
| `AdminPassword` |
| `GameDefinitionId` |
| `AllowPollsToKickPlayers` |
| `AllowPollsToBanPlayers` |
| `AllowPollsToChangeMaps` |
| `AllowIndividualBanners` |
| `UseRealisticBlocking` |
| `PremadeMatchGameMode` |
| `GameType` |
| `PremadeGameType` |
| `Map` |
| `CultureTeam1` |
| `CultureTeam2` |
| `MaxNumberOfPlayers` |
| `MinNumberOfPlayersForMatchStart` |
| `NumberOfBotsTeam1` |

## Usage Example

```csharp
OptionType example = OptionType.ServerName;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
