---
title: "CampaignMusicHandler"
description: "The Sandbox campaign music driver: a private-constructor handler that asks PSAI whether it is currently playing, and on a randomised 30-150s rest cycle starts or stops the campaign theme based on nearby culture, party morale, army membership, and sea state."
---

# CampaignMusicHandler

**Namespace:** `SandBox.View`
**Module:** `SandBox.View`
**Type:** `public class CampaignMusicHandler : IMusicHandler`
**Base:** `TaleWorlds.MountAndBlade.IMusicHandler`
**File:** `Modules.SandBox/SandBox.View/SandBox.View/CampaignMusicHandler.cs`

## Overview

This is the Sandbox module's answer to "what should the soundtrack be doing while the player is on the campaign map". It implements `IMusicHandler`, is registered with `MBMusicManager` through the static `Create()` factory, and thereafter does exactly two things on every `OnUpdated` tick: force the music manager into campaign mode if it is not already there, and run the rest/play cycle that starts and stops the campaign theme.

The theme selection is four inputs bundled into one call: the culture of the nearest town or village, whether the main party's morale is below `MusicParameters.CampaignDarkModeThreshold`, whether the player is in an army, and whether the main party is at sea. The play/rest cycle is driven by a single `float _restTimer` that alternates between a positive "currently playing" value and a negative countdown.

## Mental Model

Two details dominate everything else, and both come from the private constructor.

**It cannot be constructed by you.** `private CampaignMusicHandler()` means the only way to obtain one is `public static void Create()`, which news one up and hands it to `MBMusicManager.Current.OnCampaignMusicHandlerInit(...)`. The instance is owned by the music manager from that point on. Calling `Create()` twice registers a second handler, and both will tick.

**`IsPausable` is explicitly false.** `bool IMusicHandler.IsPausable => false` is an explicit interface implementation, so the property is not reachable through the concrete class — you only see it through an `IMusicHandler` reference. The campaign theme is never suspended by the pause menu.

The tick is `CheckMusicMode()` followed by `TickCampaignMusic(dt)`. `CheckMusicMode` compares `MBMusicManager.Current.CurrentMode` against `0` and calls `ActivateCampaignMode()` when it matches — an int comparison against a literal, so it is not a named enum member. That means the handler is self-healing about its own audio mode.

`TickCampaignMusic` is a two-branch if/else on `_restTimer`:

- **While `_restTimer <= 0`** (resting) it accumulates `dt`. The instant it crosses zero it calls `StartThemeWithConstantIntensity(...)` with the four packed inputs, then logs "Campaign music play started."
- **While `_restTimer > 0`** (playing) it checks PSAI's actual state — `PsaiCore.Instance.GetPsaiInfo()` and `psaiState == 2`. **Only when PSAI reports it is not playing** does it call `ForceStopThemeWithFadeOut()` and reset the timer to a negative random offset in `[-120, -30]` (`30f + MBRandom.RandomFloat * 90f`, negated). Otherwise it does nothing and waits.

The gate on PSAI state is what makes this robust: the game does not decide when the music ended, PSAI does, and the handler only reacts to PSAI having actually finished. The two named constants `MinRestDurationInSeconds = 30f` and `MaxRestDurationInSeconds = 120f` document the range, though the actual computation inlines the literals rather than referencing them.

`GetNearbyCulture` is a nearest-neighbour scan over `Campaign.Current.Settlements`, filtered to towns and villages, using `DistanceSquared` from the main party's position — with villages multiplied by `1.05f`, which biases the choice slightly *against* villages. It returns `null` when there is no town or village at all, and that `null` is passed straight into `GetCampaignMusicTheme`.

The three other selectors are trivial one-liners: `IsPlayerInAnArmy()` is `MobileParty.MainParty.Army != null`, `GetMoodOfMainParty()` is `MathF.Clamp(Morale / 100f, 0f, 1f)`, and `GetIsMainPartyAtSea()` is `MainParty.IsCurrentlyAtSea`. All three are `private` — they exist for the theme call and are not an extension surface.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Create` | `public static void Create()` | The only way to obtain an instance. Allocates the handler through the private constructor and registers it with `MBMusicManager.Current.OnCampaignMusicHandlerInit`. Call it once, at the same point the Sandbox module does — registering twice produces two independent handlers both driving the same music state. |
| `IMusicHandler.OnUpdated` | `void IMusicHandler.OnUpdated(float dt)` | The per-frame entry point, driven by the music manager and **not** callable through the concrete class because it is an explicit interface implementation. It forces campaign audio mode, then advances the rest/play cycle. Everything else in this class hangs off this one call. |
| `IMusicHandler.IsPausable` | `bool IMusicHandler.IsPausable => false` | Explicit interface implementation hard-coding the campaign theme as never pausable. Note that a cast to `IMusicHandler` is required just to read it; there is no public property on `CampaignMusicHandler`. |

The remaining methods — `CheckMusicMode`, `TickCampaignMusic`, `GetNearbyCulture`, `IsPlayerInAnArmy`, `GetMoodOfMainParty`, `GetIsMainPartyAtSea` — are all `private`. The class is intentionally not an extension point; a mod that wants different music selection should register its own `IMusicHandler` rather than subclass this.

## Dead members and traps

| Member | Declared at | override | Call sites | Verdict | Note |
|---|---|---|---|---|---|
| `_restTimer` | `Modules.SandBox/SandBox.View/SandBox.View/CampaignMusicHandler.cs:18` | 0 | 4 times (4 lines) | UNSUPPORTED | A static tool reports "0 call sites", but `grep -o -w` finds **4 live references across 4 lines** (`:56` `if (_restTimer <= 0f)`, `:58` `_restTimer += dt`, `:59` `if (_restTimer > 0f)`, `:68` the assignment that seeds it). Class-internal accesses with no dot prefix. Extraction blind spot, not a dead member. |

Counts: source tree `bannerlord-1.4.5` HEAD `ccbc3d40f88905765a1484492d41b7000e7249fa`, 8,583 `.cs` files including `bin/`. Call-site counts are **occurrence counts** (`grep -o -w`).

> Do not confuse this with the two `private const` values in the same file. `MinRestDurationInSeconds` (`:14`) and `MaxRestDurationInSeconds` (`:16`) really do have zero references, but that is a language-level certainty — no external assembly can reference a `private const` — so it is not a modder trap. The rest timer is written as a literal instead: `:68` computes `0f - (30f + MBRandom.RandomFloat * 90f)`.

## Real Example

Register the handler once, at module load, exactly as the Sandbox module does:

```csharp
CampaignMusicHandler.Create();
```

Read the main party's music-relevant state yourself to predict what the theme selection will use:

```csharp
float mood = MathF.Clamp(MobileParty.MainParty.Morale / 100f, 0f, 1f);
bool dark = mood < MusicParameters.CampaignDarkModeThreshold;
Debug.Print("mood = " + mood + ", dark theme = " + dark, 0);
Debug.Print("in army = " + (MobileParty.MainParty.Army != null), 0);
Debug.Print("at sea = " + MobileParty.MainParty.IsCurrentlyAtSea, 0);
```

Find the culture the handler will pick, reproducing its nearest-town-or-village scan with the same village penalty:

```csharp
CultureObject nearest = null;
float best = float.MaxValue;
foreach (Settlement candidate in Campaign.Current.Settlements)
{
    if (candidate.IsTown || candidate.IsVillage)
    {
        float d = candidate.Position.DistanceSquared(MobileParty.MainParty.Position);
        if (candidate.IsVillage)
        {
            d *= 1.05f;
        }
        if (d < best)
        {
            best = d;
            nearest = candidate.Culture;
        }
    }
}
Debug.Print("nearest culture = " + nearest, 0);
```

Drive the campaign theme yourself from a custom handler instead of subclassing this one:

```csharp
MBMusicManager.Current.ActivateCampaignMode();
MBMusicManager.Current.StartThemeWithConstantIntensity(
    MBMusicManager.Current.GetCampaignMusicTheme(nearest, false, false, false),
    false);
```

## Risks and Boundaries

- **Private constructor.** `new CampaignMusicHandler()` will not compile. `Create()` is the sole entry, and it has no idempotence guard — a double registration leaves two handlers ticking the same state.
- **Both lifecycle methods are explicit interface implementations.** `OnUpdated` and `IsPausable` are invisible on the concrete class; any test or debug code must hold an `IMusicHandler` reference.
- **The music mode check is an int comparison against `0`.** It is not a named enum value, so it is positional and will not survive a reordering of the underlying mode enum.
- **The PSAI gate means the game does not end the track.** `psaiState == 2` is another ordinal comparison against a native-side enum. If PSAI reports a different state while music is actually playing, the fade-out never fires and the rest timer stays positive.
- **The rest duration is randomised on every cycle** over `[30, 120]` seconds, using `MBRandom`. Never build deterministic timing on it.
- **`GetNearbyCulture` can return `null`.** With no towns or villages in the campaign, `null` flows into `GetCampaignMusicTheme`, and the behaviour of that native call with a null culture is not determinable from the C# source alone.
- **Villages are penalised by 5%** in the distance comparison, which is an unlabelled tuning constant, not a documented rule.
- **Depends on `MobileParty.MainParty` unconditionally.** All three selectors dereference it, so the handler is not safe in a context without a main party.
- **Depends on `psai.net` native state.** The music lifecycle is coupled to an external audio plugin; when PSAI is unavailable the rest/play cycle stalls.
- **No extension surface.** Everything interesting is `private`, so overriding music behaviour means writing your own `IMusicHandler` and replacing the registration.

## Cross-version note

The v1.4.5 file is 114 lines. The private-constructor + `Create()` factory pattern, the `IsPausable => false` hard-coding, and the `MinRestDurationInSeconds` / `MaxRestDurationInSeconds` constants are all present here. The four-input `GetCampaignMusicTheme` signature is the thing most likely to shift between versions, since each new input becomes a new argument.

## Dependencies

- Contract: [IMusicHandler](../../mission-ext/IMusicHandler) is the interface whose `OnUpdated` and `IsPausable` this class implements explicitly.
- Audio owner: [MBMusicManager](../../mission-ext/MBMusicManager) holds the current mode, performs the fade and the theme start, and drives `OnUpdated` each frame.
- Tuning input: [MusicParameters](../../mission-ext/MusicParameters) supplies `CampaignDarkModeThreshold`, the morale boundary between the normal and dark campaign themes.
- Campaign context: [MobileParty](../../campaign/MobileParty) supplies morale, army membership, sea state, and position; [Settlement](../../campaign/Settlement) is scanned for the nearest culture.
- External dependency: `PsaiCore.Instance.GetPsaiInfo()` comes from the `psai.net` package and is the authority on whether the current track has actually finished.
- Bucket index: [campaign-ext API section](../)
