<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBMusicManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBMusicManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBMusicManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBMusicManager.cs`

## Overview

`MBMusicManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MBMusicManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static MBMusicManager Current { get; }` |
| `CurrentMode` | `public MusicMode CurrentMode { get; }` |

## Key Methods

### GetCampaignTheme
`public MusicTheme GetCampaignTheme(BasicCultureObject culture, bool isDark)`

**Purpose:** Gets the current value of `campaign theme`.

### GetCampaignDramaticThemeWithCulture
`public MusicTheme GetCampaignDramaticThemeWithCulture(BasicCultureObject culture)`

**Purpose:** Gets the current value of `campaign dramatic theme with culture`.

### GetSeaCampignMusic
`public MusicTheme GetSeaCampignMusic(BasicCultureObject culture)`

**Purpose:** Gets the current value of `sea campign music`.

### GetBattleTheme
`public MusicTheme GetBattleTheme(BasicCultureObject culture, int battleSize, out bool isPaganBattle)`

**Purpose:** Gets the current value of `battle theme`.

### GetSiegeTheme
`public MusicTheme GetSiegeTheme(BasicCultureObject culture)`

**Purpose:** Gets the current value of `siege theme`.

### GetBattleEndTheme
`public MusicTheme GetBattleEndTheme(BasicCultureObject culture, bool isVictorious)`

**Purpose:** Gets the current value of `battle end theme`.

### IsCreationCompleted
`public static bool IsCreationCompleted()`

**Purpose:** Handles logic related to `is creation completed`.

### Create
`public static void Create()`

**Purpose:** Creates a new `create` instance or object.

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnCampaignMusicHandlerInit
`public void OnCampaignMusicHandlerInit(IMusicHandler campaignMusicHandler)`

**Purpose:** Called when the `campaign music handler init` event is raised.

### OnCampaignMusicHandlerFinalize
`public void OnCampaignMusicHandlerFinalize()`

**Purpose:** Called when the `campaign music handler finalize` event is raised.

### OnBattleMusicHandlerInit
`public void OnBattleMusicHandlerInit(IMusicHandler battleMusicHandler)`

**Purpose:** Called when the `battle music handler init` event is raised.

### OnBattleMusicHandlerFinalize
`public void OnBattleMusicHandlerFinalize()`

**Purpose:** Called when the `battle music handler finalize` event is raised.

### OnSilencedMusicHandlerInit
`public void OnSilencedMusicHandlerInit(IMusicHandler silencedMusicHandler)`

**Purpose:** Called when the `silenced music handler init` event is raised.

### OnSilencedMusicHandlerFinalize
`public void OnSilencedMusicHandlerFinalize()`

**Purpose:** Called when the `silenced music handler finalize` event is raised.

### ActivateBattleMode
`public void ActivateBattleMode()`

**Purpose:** Handles logic related to `activate battle mode`.

### DeactivateBattleMode
`public void DeactivateBattleMode()`

**Purpose:** Handles logic related to `deactivate battle mode`.

### ActivateCampaignMode
`public void ActivateCampaignMode()`

**Purpose:** Handles logic related to `activate campaign mode`.

### DeactivateCampaignMode
`public void DeactivateCampaignMode()`

**Purpose:** Handles logic related to `deactivate campaign mode`.

### DeactivateCurrentMode
`public void DeactivateCurrentMode()`

**Purpose:** Handles logic related to `deactivate current mode`.

### UnpauseMusicManagerSystem
`public void UnpauseMusicManagerSystem()`

**Purpose:** Handles logic related to `unpause music manager system`.

### PauseMusicManagerSystem
`public void PauseMusicManagerSystem()`

**Purpose:** Handles logic related to `pause music manager system`.

### StartTheme
`public void StartTheme(MusicTheme theme, float startIntensity, bool queueEndSegment = false)`

**Purpose:** Handles logic related to `start theme`.

### StartThemeWithConstantIntensity
`public void StartThemeWithConstantIntensity(MusicTheme theme, bool queueEndSegment = false)`

**Purpose:** Handles logic related to `start theme with constant intensity`.

### ForceStopThemeWithFadeOut
`public void ForceStopThemeWithFadeOut()`

**Purpose:** Handles logic related to `force stop theme with fade out`.

### ChangeCurrentThemeIntensity
`public void ChangeCurrentThemeIntensity(float deltaIntensity)`

**Purpose:** Handles logic related to `change current theme intensity`.

### Update
`public void Update(float dt)`

**Purpose:** Updates the state or data of `update`.

### GetSiegeTheme
`public MusicTheme GetSiegeTheme(BasicCultureObject culture)`

**Purpose:** Gets the current value of `siege theme`.

### GetBattleTheme
`public MusicTheme GetBattleTheme(BasicCultureObject culture, int battleSize, out bool isPaganBattle)`

**Purpose:** Gets the current value of `battle theme`.

### GetBattleEndTheme
`public MusicTheme GetBattleEndTheme(BasicCultureObject culture, bool isVictory)`

**Purpose:** Gets the current value of `battle end theme`.

### GetBattleTurnsOneSideTheme
`public MusicTheme GetBattleTurnsOneSideTheme(BasicCultureObject culture, bool isPositive, bool isPaganBattle)`

**Purpose:** Gets the current value of `battle turns one side theme`.

### GetCampaignMusicTheme
`public MusicTheme GetCampaignMusicTheme(BasicCultureObject culture, bool isDark, bool isWarMode, bool isAtSea)`

**Purpose:** Gets the current value of `campaign music theme`.

## Usage Example

```csharp
var manager = MBMusicManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)