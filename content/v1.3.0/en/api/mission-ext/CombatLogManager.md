---
title: "CombatLogManager"
description: "Auto-generated class reference for CombatLogManager."
---
# CombatLogManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CombatLogManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CombatLogManager.cs`

## Overview

`CombatLogManager` is a static facade over two different sinks, and that is the single most important thing about it. `GenerateCombatLog(CombatLogData)` (`CombatLogManager.cs:67`) is the player-facing path: it raises the static `OnGenerateCombatLog` event, then walks `logData.GetLogString()` and calls `InformationManager.DisplayMessage` with the `"Combat"` category for each line (`CombatLogManager.cs:76`). `PrintDebugLogForInfo(...)` (`CombatLogManager.cs:17`) is the developer path: it builds a localized string and routes it to the private `Print`, whose entire body is `Debug.Print(message, 0, (Debug.DebugColor)logColor, 562949953421312UL)` (`CombatLogManager.cs:63`). Nothing a player sees comes from that second method.

The class is `static` (`CombatLogManager.cs:9`), so there is no instance and no lifecycle. `CombatLogData` is the value type both paths consume, and it is a large struct of `readonly bool` flags describing the attacker/victim pair (`CombatLogData.cs:313`) constructed with a sixteen-argument constructor (`CombatLogData.cs:252`) rather than with settable properties — `TotalDamage` is the one public field (`CombatLogData.cs:83`) and `AttackProgress` has an `internal` setter (`CombatLogData.cs:94`).

The extension seam is the public static event `OnGenerateCombatLog` (`CombatLogManager.cs:14`), of delegate type `OnPrintCombatLogHandler(CombatLogData)` (`CombatLogManager.cs:82`).

## Mental Model

The event observes; it does not filter. `GenerateCombatLog` captures the delegate into a local, null-checks it, invokes it, and then goes on to display the log lines regardless (`CombatLogManager.cs:69` and `CombatLogManager.cs:74`). A subscriber cannot suppress or rewrite the combat log by handling the event — anything you want shown, you have to add with your own `InformationManager.DisplayMessage` call, and anything you want hidden, you cannot remove.

The branch order in `PrintDebugLogForInfo` is victim-first, and the two branches use text keys whose names read backwards. `bool isMine2 = victimAgent.IsMine` is tested first (`CombatLogManager.cs:22`) and yields `combat_log_player_attacked` in red (`CombatLogManager.cs:29`); the `else if (attackerAgent.IsMine)` branch yields `combat_log_player_attacker` in green (`CombatLogManager.cs:35`). Because the victim test wins, a friendly-fire line where both agents are yours is labelled from the victim's point of view.

There is a third state that is not handled: if neither agent is yours, `message` is still the `TextObject.GetEmpty()` it was initialised to at the top of the method (`CombatLogManager.cs:19`) and is printed anyway (`CombatLogManager.cs:38`), so an uninteresting hit still emits one blank debug line. The optional detail lines below it are gated separately — armour is only appended when `armorAmount > 0` (`CombatLogManager.cs:41`), the hit bone only when the victim is human (`CombatLogManager.cs:47`), and the speed bonus only when it is non-zero (`CombatLogManager.cs:52`).

`GenerateCombatLog` and `PrintDebugLogForInfo` share nothing but the private `Print`, and they do not even share that: `GenerateCombatLog` never calls `Print`. Use the first for anything the player should read, the second only when you are debugging damage numbers.

## How to use

**Getting one.** It is static — there is nothing to obtain. To add to the combat log, hook the static event; to publish your own lines, call `InformationManager.DisplayMessage` yourself.

**Typical use** — observing every combat log entry and adding your own line:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.Library;
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

public static class MyCombatLogHook
{
    private static void OnPrintCombatLog(CombatLogData logData)
    {
        // Observation only: GenerateCombatLog displays the log regardless
        // of what this handler does (CombatLogManager.cs:74).
        foreach (ValueTuple<string, uint> line in logData.GetLogString())
        {
            MyAnalytics.Record(line.Item1);
        }

        // To add your own line, display it yourself — the event cannot inject one.
        InformationManager.DisplayMessage(
            new InformationMessage(GameTexts.FindText("my_mod_hit_confirmed", null).ToString()),
            Color.FromUint(0xFFFF8000U),
            "Combat");
    }

    public static void Install()
    {
        CombatLogManager.OnGenerateCombatLog += OnPrintCombatLog;
    }

    public static void Remove()
    {
        CombatLogManager.OnGenerateCombatLog -= OnPrintCombatLog;
    }
}
```

`CombatLogData.GetLogString()` returns `List<ValueTuple<string, uint>>` (`CombatLogData.cs:97`) — the `string` is the localised text and the `uint` is the colour, which is exactly the pair `GenerateCombatLog` unpacks at `CombatLogManager.cs:74`.

**Most common mistake:** trying to filter the combat log from the event handler.

```csharp
CombatLogManager.OnGenerateCombatLog += logData => { return; };  // returns void
```

There is no return value and no suppression flag: `GenerateCombatLog` invokes the handler and then unconditionally displays every line from `GetLogString()` (`CombatLogManager.cs:74`). The line still appears for the player, so a mod that assumes it has hidden something ends up with duplicated or mis-attributed messages and no error. To change what the player reads, stop the log being produced at the source — your own damage model or agent-behaviour hook — and raise the message you want through `InformationManager` directly.

## Key Methods

### PrintDebugLogForInfo
`public static void PrintDebugLogForInfo(Agent attackerAgent, Agent victimAgent, DamageTypes damageType, int speedBonus, int armorAmount, int inflictedDamage, int absorbedByArmor, sbyte collisionBone, float lostHpPercentage)`

**Purpose:** Executes the PrintDebugLogForInfo logic.

```csharp
// Static call; no instance required
CombatLogManager.PrintDebugLogForInfo(attackerAgent, victimAgent, damageType, 0, 0, 0, 0, 0, 0);
```

### GenerateCombatLog
`public static void GenerateCombatLog(CombatLogData logData)`

**Purpose:** Generates an instance, data, or representation of combat log.

```csharp
// Static call; no instance required
CombatLogManager.GenerateCombatLog(logData);
```

### OnPrintCombatLogHandler
`public delegate void OnPrintCombatLogHandler(CombatLogData logData)`

**Purpose:** Invoked when the print combat log handler event is raised.

```csharp
// Obtain an instance of CombatLogManager from the subsystem API first
CombatLogManager combatLogManager = ...;
combatLogManager.OnPrintCombatLogHandler(logData);
```

## Usage Example

```csharp
var manager = CombatLogManager.Current;
```

## See Also

- [Area Index](../)
- [CombatLogData — the struct both entry points consume](../CombatLogData)
- [CombatLogColor — the colour enum the debug path casts to](../CombatLogColor)
- [中文页面](../../../../zh/api/mission-ext/CombatLogManager)