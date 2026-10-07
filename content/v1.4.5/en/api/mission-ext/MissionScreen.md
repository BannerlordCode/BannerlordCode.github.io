---
title: "MissionScreen"
description: "The Gauntlet screen that owns an active battle: camera, order flags, deployment, spectating, photo mode and console camera commands. Explains the GameStateScreen binding, the magic-number deployment check, and how to register a MissionView."
---

# MissionScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScreen : ScreenBase, IMissionSystemHandler, IGameStateListener, IMissionScreen, IMissionListener, IChatLogHandlerScreen`
**Base:** `ScreenBase`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Screens/MissionScreen.cs`

## Overview

`MissionScreen` is the **screen that owns a running battle**. It is 4753 lines — the largest class in this slice — and it is what the engine pushes when the game enters [`MissionState`](../../campaign-ext/MissionState): `[GameStateScreen(typeof(MissionState))]` at `MissionScreen.cs:20`, applied to `public class MissionScreen : ScreenBase, …` at `MissionScreen.cs:21`.

That attribute is the acquisition mechanism. **You never construct this from mod code in any useful way** — the constructor takes a `MissionState` (`MissionScreen.cs:307`) which the game state manager supplies, and the screen is reached through `ScreenManager.TopScreen`. Four of its own members already rely on that, testing `ScreenManager.TopScreen is MissionScreen missionScreen` (`MissionScreen.cs:781`, `:790`).

It implements five interfaces beyond `ScreenBase` — `IMissionSystemHandler`, `IGameStateListener`, `IMissionScreen`, `IMissionListener`, `IChatLogHandlerScreen` (`MissionScreen.cs:21`) — which is how it receives mission callbacks and chat-log routing without being a `MissionBehavior`.

## Mental Model

### What it is / which layer

- It is the **presentation shell around a mission**, not the mission. [`Mission`](../../mission/Mission) runs the simulation; this class renders it, drives the battle camera, handles the deployment phase, the order flags, spectating and photo mode.
- Think of it as **the battle's window and its camera operator**. Two examples in the source make the shape obvious: `MouseVisible => ScreenManager.GetMouseVisibility()` (`MissionScreen.cs:279`) delegates to a *static*, and `ToggleFixedMissionCamera` (`MissionScreen.cs:779`) reaches the live instance through `ScreenManager.TopScreen` and then mutates the instance field `_fixCamera` (`MissionScreen.cs:783`).
- The **lifecycle hooks are `protected override` from `ScreenBase`**: `OnInitialize` (`MissionScreen.cs:328`), `OnActivate` (`:408`), `OnResume` (`:419`), `OnFrameTick(float dt)` (`:557`), `OnDeactivate` (`:687`), `OnFinalize` (`:720`). The pattern is *activate → frame tick → deactivate*, and `OnFinalize` is where teardown happens.
- **Views attach to it, not the other way round.** `AddMissionView(MissionView)` (`MissionScreen.cs:3475`), `RegisterView(MissionView)` (`:3658`) and `UnregisterView(MissionView)` (`:3664`) are the entry points, and `InitializeMissionView()` is `protected virtual` (`MissionScreen.cs:375`) — the intended override point for a custom view set.

### The consequence that matters

**`IsDeploymentActive` compares an `int` cast against the literal `6`.** `MissionScreen.cs:205` reads `public bool IsDeploymentActive => (int)Mission.Mode == 6;` — the enum is cast to `int` and compared to a magic number rather than to `MissionMode.Deployment`. That has two real consequences for a modder. First, the semantic meaning is invisible at the call site: you cannot tell from `(int)Mission.Mode == 6` which mode it is without counting the enum. Second, **it is fragile**: if the enum gains a member before the deployment value, or the deployment value changes, this silently reports the wrong phase and nothing raises an error. If you need the deployment state, prefer comparing `Mission.Mode` against the enum yourself, and treat this property as a convenience that may not agree.

The second consequence is about ownership. **Almost every mutator on this screen assumes it is the top screen.** `SetFixedMissionCameraActive(bool)` (`MissionScreen.cs:788`) is a `public static` that quietly does nothing unless `ScreenManager.TopScreen is MissionScreen` (`:790`). Calling a `MissionScreen` API while a menu, dialogue or another screen is on top is a **silent no-op** — the modder's "I called it and nothing happened" case, and it applies to the `public static` console-command family specifically.

## How to use

**How to obtain it.** Not by construction — the `MissionState` constructor argument (`MissionScreen.cs:307`) belongs to the game state manager. Reach it from inside a `MissionBehavior` or `MissionLogic` by testing `ScreenManager.TopScreen`:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View.Screens;
using TaleWorlds.ScreenSystem;

public class MissionScreenAccess
{
    // The screen is owned by the GameStateManager, so you look it up rather
    // than constructing it. This is the same test the class's own static
    // console commands use (MissionScreen.cs:781, :790).
    public static MissionScreen TryGet()
    {
        if (ScreenManager.TopScreen is MissionScreen screen)
        {
            return screen;
        }

        Debug.Print("no mission screen on top; a menu or dialogue is active", 0);
        return null;
    }
}
```

**A typical use.** Ask the screen where the mouse ray hits the ground, and handle the `bool`:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade.View.Screens;
using TaleWorlds.ScreenSystem;

public class GroundPicker
{
    public static bool TryPickGround(out Vec3 position)
    {
        position = Vec3.Zero;

        if (!(ScreenManager.TopScreen is MissionScreen screen))
            return false;

        // Returns false when the ray misses the terrain — a normal outcome when
        // the camera points at the sky, not an error (MissionScreen.cs:3524).
        if (!screen.GetProjectedMousePositionOnGround(
                out Vec3 ground,
                out Vec3 normal,
                out bool hasWater))
        {
            return false;
        }

        position = ground;
        Debug.Print("picked ground at " + position, 0);
        return true;
    }
}
```

Attach a custom view to the running battle:

```csharp
using TaleWorlds.MountAndBlade.View.Screens;
using TaleWorlds.ScreenSystem;

public class MyMissionViewHost
{
    public static void Attach(MissionView myView)
    {
        if (myView == null)
            return;

        // AddMissionView (MissionScreen.cs:3475) and RegisterView (:3658) are
        // two distinct entry points; Register/Unregister is the pair, and
        // AddMissionView is the additive one. Unregister on teardown — an
        // attached view outlives the mission otherwise.
        if (ScreenManager.TopScreen is MissionScreen screen)
        {
            screen.AddMissionView(myView);
        }
    }

    public static void Detach(MissionView myView)
    {
        if (myView == null)
            return;

        if (ScreenManager.TopScreen is MissionScreen screen)
        {
            screen.UnregisterView(myView);
        }
    }
}
```

**What to watch out for.** The trap that will cost you an afternoon is calling a `public static` mutator while another screen is on top. `SetFixedMissionCameraActive` (`MissionScreen.cs:788`), `ToggleFixedMissionCamera` (`:779`), `SetShiftCameraSpeed` (`:798`) and `SetCameraPosition` (`:813`) all begin with a `ScreenManager.TopScreen is MissionScreen` test and **do nothing otherwise** — no exception, no log. The second trap is `IsDeploymentActive` (`MissionScreen.cs:205`) and its magic `6`.

## Key members

Ordered by what a modder actually reaches for. The consequence is in each row.

| Member | Signature | What it is for |
| --- | --- | --- |
| `IsDeploymentActive` | `public bool IsDeploymentActive => (int)Mission.Mode == 6;` at `MissionScreen.cs:205` | Whether the mission is in its deployment phase. **The comparison is an `int` cast against the literal `6`** (`:205`), not an enum comparison, so the meaning is invisible at the call site and the test is fragile against enum reordering. Prefer comparing `Mission.Mode` to the enum yourself when the answer matters. |
| `SetFixedMissionCameraActive` | `public static void SetFixedMissionCameraActive(bool active)` at `MissionScreen.cs:788` | Locks or unlocks the battle camera. **`static`, and it begins with `if (ScreenManager.TopScreen is MissionScreen missionScreen)` (`:790`)** — called while a menu or dialogue is on top, it **does nothing and reports nothing**. It then sets the instance field `_fixCamera` and updates mouse visibility on the scene layer (`:792-793`). |
| `ToggleFixedMissionCamera` | `[CommandLineArgumentFunction("fix_camera_toggle", "mission")] public static string ToggleFixedMissionCamera(List<string> strings)` at `MissionScreen.cs:778-779` | The **console command** behind `fix_camera_toggle`, in the `mission` group. Flips `_fixCamera` on the top screen (`:783`) and returns the literal `"Done"` (`:785`). **The return string is console output, not a status** — it says "Done" whether or not it found a mission screen, so do not parse it for success. |
| `SetShiftCameraSpeed` / `SetCameraPosition` | `[CommandLineArgumentFunction("set_shift_camera_speed", "mission")] public static string SetShiftCameraSpeed(List<string> strings)` at `MissionScreen.cs:797-798` and `public static string SetCameraPosition(List<string> strings)` at `:813` | Two more console commands in the same family, same `ScreenManager.TopScreen` guard and same "always returns a string" shape. `SetShiftCameraSpeed` is attribute-declared at `:797`; `SetCameraPosition` is at `:813`. Useful as reference for how this class exposes console-callable behaviour, and a trap if you assume a `string` return means success. |
| `AddMissionView` / `RegisterView` / `UnregisterView` | `public void AddMissionView(MissionView missionView)` at `MissionScreen.cs:3475`, `public void RegisterView(MissionView missionView)` at `:3658`, `public void UnregisterView(MissionView missionView)` at `:3664` | Attaching and detaching the per-screen views that draw the battle. `Register`/`Unregister` are the matched pair; `AddMissionView` is the additive entry. **Both attach paths require the screen to be on top**, so a call during a menu transition finds nothing to attach to, and an attached view that is never unregistered outlives the mission. |
| `GetProjectedMousePositionOnGround` | `public bool GetProjectedMousePositionOnGround(out Vec3 groundPosition, out Vec3 groundNormal, B…)` at `MissionScreen.cs:3524` | Where the cursor ray meets the terrain. **Returns `bool`** — `false` when the ray misses, which happens whenever the camera looks at the sky and is not an error. Three `out` values, so declare all of them before the call. The water counterpart `GetProjectedMousePositionOnWater(out Vec3)` is at `:3530` and also returns `bool`. |
| `ScreenPointToWorldRay` | `public void ScreenPointToWorldRay(Vec2 screenPoint, out Vec3 rayBegin, out Vec3 rayEnd)` at `MissionScreen.cs:3483` | The world-space ray under a screen point. **`void` with two `out` values** — it never tells you whether the ray is meaningful, unlike the two projected-position members above. If you only need a ground hit, prefer those. |
| `SetPhotoModeEnabled` / `SetPhotoModeRequiresMouse` | `public void SetPhotoModeEnabled(bool isEnabled)` at `MissionScreen.cs:3602` and `public void SetPhotoModeRequiresMouse(bool isRequired)` at `:3597` | Toggling photo mode and whether it needs the mouse. Both `void`. `IsPhotoModeAllowed()` (`:515`) is the query, and it is a *policy* answer — the flag being set does not imply the query returns `true`. |
| `SetOrderFlagVisibility` / `GetOrderFlagPosition` / `GetOrderFlagFrame` | `public void SetOrderFlagVisibility(bool value)` at `MissionScreen.cs:449`, `public Vec3 GetOrderFlagPosition()` at `:3552`, `public MatrixFrame GetOrderFlagFrame()` at `:3563` | The order-flag marker a formation drops. The two getters are what positioning code uses, and `GetOrderFlagFrame` returns a full frame rather than a point — prefer it over composing the position yourself. There is **no `bool` on either getter**, so a screen with no order flag is indistinguishable from one with a flag at the origin. |
| `SetCameraLockState` / `CanToggleCamera` / `CanViewCharacter` / `IsViewingCharacter` | `public void SetCameraLockState(bool isLocked)` at `MissionScreen.cs:3653`, `protected virtual bool CanToggleCamera()` at `:2631`, `protected virtual bool CanViewCharacter()` at `:2644`, `public bool IsViewingCharacter()` at `:2649` | The character-view (the inspect-a-troop camera). **`CanToggleCamera` and `CanViewCharacter` are `protected virtual`** — a subclass decides whether the player may enter character view, and mod code outside a subclass cannot ask. `IsViewingCharacter()` (`:2649`) is the public state query. |
| `SetAgentToFollow` / `GetSpectatingData` / `GetPlayerAgentVisuals` | `public void SetAgentToFollow(Agent agent)` at `MissionScreen.cs:3736`, `public SpectatorData GetSpectatingData(Vec3 currentCameraPosition)` at `:3741`, `public IAgentVisual GetPlayerAgentVisuals(MissionPeer lobbyPeer)` at `:3731` | The spectating camera. `SetAgentToFollow` takes an `Agent` — **passing an agent from a finished mission leaves the spectator camera pointing at a freed pointer**, and nothing here guards it. `GetPlayerAgentVisuals` takes a `MissionPeer`, so in multiplayer it returns *that peer's* visual, not the local player's. |
| `MissionStartedRendering` | `public bool MissionStartedRendering()` at `MissionScreen.cs:3543` | Whether the battle has actually begun drawing. The `bool` makes it the safe gate for spawning presentation work — but note it is about *rendering*, not about the simulation being safe, so it is not a substitute for checking `Mission.Current`. |
| `SetDisplayDialog` | `public bool SetDisplayDialog(bool value)` at `MissionScreen.cs:480` | Toggles the dialogue display, and — unusually for this class — **returns `bool`**, so unlike the other mutators it tells you whether it took. Prefer this shape when you need confirmation. |
| `InitializeMissionView` | `protected virtual void InitializeMissionView()` at `MissionScreen.cs:375` | Creates the screen's view set. **`protected virtual` and the intended override point** for a mod that wants its own view stack without replacing the screen. A subclass overriding it should call `base` — the base's version is what wires the default views, and skipping it leaves the battle with no camera or HUD. |
| `AfterMissionTick` | `protected virtual void AfterMissionTick(Mission mission, float realDt)` at `MissionScreen.cs:4102` | Post-tick hook, called with the live `Mission` and the **real** delta time (not the scaled one). `protected virtual`, so it is a subclass seam rather than a mod-callable one. Note the parameter is the real time: animation and camera work tuned against it will not slow down with time dilation, and code that assumes a clamped dt will misbehave under dilation. |
| `OnEscape` | `public void OnEscape()` at `MissionScreen.cs:4145` | The escape-key handler for this screen. `public`, so it is reachable, but **calling it programmatically is not the same as the player pressing escape** — it bypasses whatever focus and input routing produced the key press. |
| `TeleportMainAgentToCameraFocusForCheat` | `public virtual void TeleportMainAgentToCameraFocusForCheat()` at `MissionScreen.cs:3670` | Moves the player agent to wherever the camera is looking, for debugging. **Named for what it is — a cheat** — and `public virtual`, so it is callable. It moves a live agent, which means formation indices, AI state and position caches all become stale; treat it as a console-time tool only. |
| `RegisterRadialMenuObject<T>` / `UnregisterRadialMenuObject` | `public void RegisterRadialMenuObject<T>(T radialMenuOwnerObject) where T : class` at `MissionScreen.cs:3581` and `public void UnregisterRadialMenuObject(object radialMenuOwnerObject)` at `:3589` | Opting an object in and out of the radial menu. Note the **asymmetry**: registration is generic and constrained to `class` (`:3581`) while unregistration takes a plain `object` (`:3589`), so the compiler will not catch a mismatched pair. An unregistered object stays in the menu; a doubly-registered one may appear twice. |
| `OnSpectateAgentDelegate` / `GatherCustomAgentListToSpectateDelegate` | `public delegate void OnSpectateAgentDelegate(Agent followedAgent)` at `MissionScreen.cs:23` and `public delegate List<Agent> GatherCustomAgentListToSpectateDelegate(Agent forcedAgentToInclude)` at `:25` | The screen's two public extension points for spectating. The first notifies you of the followed agent; the second **asks you for the candidate list**, with a `forcedAgentToInclude` argument so you can always guarantee one entry is present. Wired with `SetCustomAgentListToSpectateGatherer` (`:534`). |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| A public `Mission` property with a setter | **UNRESOLVED — supplied by the `IMission*` interfaces** | The class declares `MissionState`-driven state and implements `IMissionScreen` / `IMissionListener` (`MissionScreen.cs:21`). Positive evidence: `grep -c 'sealed' MissionScreen.cs` returns 0 — the class is **not sealed** and its screen members are reachable, but there is no `public Mission Mission { get; set; }` you can assign. The mission comes from the state, not from you. |
| A way to construct the screen from mod code | **UNRESOLVED — not supported** | The single constructor takes `MissionState` (`MissionScreen.cs:307`), which the game state manager owns. Positive evidence: `grep -c 'public MissionScreen(' MissionScreen.cs` returns 1, and it is not marked `[GameStateScreen]` — the attribute at `MissionScreen.cs:20` is on the class and instantiates it for you. |
| A success return on the static camera mutators | **UNRESOLVED — absent by design** | `SetFixedMissionCameraActive` (`MissionScreen.cs:788`) is `void` and `ToggleFixedMissionCamera` (`:779`) always returns `"Done"`. Positive evidence: both bodies are a bare `if (ScreenManager.TopScreen is MissionScreen …)` with no error path. |

## Examples

Gate every screen call on the screen actually being on top:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.View.Screens;
using TaleWorlds.ScreenSystem;

public class GatedCameraCalls
{
    // The static family (MissionScreen.cs:779, :788, :798, :813) silently does
    // nothing unless MissionScreen is the top screen — no exception, no log.
    // So check first, every time.
    public static bool LockCamera(bool locked)
    {
        if (!(ScreenManager.TopScreen is MissionScreen))
        {
            Debug.Print("mission screen is not on top; camera lock ignored", 0);
            return false;
        }

        MissionScreen.SetFixedMissionCameraActive(locked);   // MissionScreen.cs:788
        return true;
    }
}
```

Compare the mission mode yourself instead of trusting the magic number:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View.Screens;
using TaleWorlds.ScreenSystem;

public class DeploymentCheck
{
    public static bool IsDeploying(MissionScreen screen)
    {
        if (screen == null)
            return false;

        // IsDeploymentActive is `(int)Mission.Mode == 6` (MissionScreen.cs:205).
        // Comparing the enum directly makes the intent visible and does not
        // depend on an ordinal staying put.
        return Mission.Current != null && Mission.Current.Mode == MissionMode.Deployment;
    }
}
```

Turn an order flag into a placement without composing the frame yourself:

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade.View.Screens;
using TaleWorlds.ScreenSystem;

public class OrderFlagReader
{
    public static bool TryGetFlag(out MatrixFrame frame)
    {
        frame = default;

        if (!(ScreenManager.TopScreen is MissionScreen screen))
            return false;

        // Neither getter returns a bool (MissionScreen.cs:3552, :3563), so a
        // screen with no order flag is indistinguishable from one at the
        // origin. Guard on IsDeploymentActive-style state, not on the value.
        frame = screen.GetOrderFlagFrame();
        return true;
    }
}
```

Register and unregister a radial-menu object as a matched pair:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View.Screens;
using TaleWorlds.ScreenSystem;

public class RadialMenuHost
{
    private static MissionScreen _screen;

    public static void Add(IOrderable orderable)
    {
        if (orderable == null)
            return;

        // Registration is generic and constrained to `class`
        // (MissionScreen.cs:3581); unregistration takes a plain object (:3589),
        // so the compiler will not catch a mismatched pair.
        if (ScreenManager.TopScreen is MissionScreen screen)
        {
            _screen = screen;
            screen.RegisterRadialMenuObject(orderable);
        }
    }

    public static void Remove(IOrderable orderable)
    {
        if (orderable == null)
            return;

        if (_screen != null)
        {
            _screen.UnregisterRadialMenuObject(orderable);
        }
    }
}
```

Override the view stack rather than replacing the screen:

```csharp
using TaleWorlds.MountAndBlade.View.MissionViews;
using TaleWorlds.MountAndBlade.View.Screens;

// MissionScreen is NOT sealed (MissionScreen.cs:21) and InitializeMissionView
// is protected virtual (:375) — this is the intended seam.
public class MyModMissionScreen : MissionScreen
{
    protected override void InitializeMissionView()
    {
        // Call base: it wires the default views, and skipping it leaves the
        // battle with no camera or HUD.
        base.InitializeMissionView();

        AddMissionView(new MyModOverlayView());
    }

    protected override bool CanViewCharacter()
    {
        // Another protected virtual (:2644) — the screen asks its subclass
        // whether the player may enter character view at all.
        return base.CanViewCharacter();
    }
}
```

## Risks and crash boundaries

- **`IsDeploymentActive` is a magic-number comparison.** `(int)Mission.Mode == 6` at `MissionScreen.cs:205`. It is fragile against enum reordering and hides its meaning; compare `Mission.Mode` to `MissionMode.Deployment` yourself when the answer matters.
- **The `public static` camera mutators silently no-op off-screen.** `SetFixedMissionCameraActive` (`MissionScreen.cs:788`), `ToggleFixedMissionCamera` (`:779`), `SetShiftCameraSpeed` (`:798`) and `SetCameraPosition` (`:813`) all begin with `ScreenManager.TopScreen is MissionScreen` (`:781`, `:790`). Called under a menu or dialogue, **nothing happens and nothing is logged** — the modder's silent-failure case.
- **Console commands always report success.** `ToggleFixedMissionCamera` returns the literal `"Done"` (`MissionScreen.cs:785`) whether or not it found a screen. Do not parse the return string as a status.
- **`SetAgentToFollow(Agent)` takes a live agent.** `MissionScreen.cs:3736`. Passing an agent from a finished mission points the spectator camera at a freed object, and nothing here validates it.
- **`GetPlayerAgentVisuals(MissionPeer)` is peer-scoped.** `MissionScreen.cs:3731`. In multiplayer it returns the given peer's visual — reading it as "the local player's visual" is wrong and quietly so.
- **The position getters carry no validity signal.** `GetOrderFlagPosition()` (`:3552`) and `GetOrderFlagFrame()` (`:3563`) return a plain `Vec3` / `MatrixFrame`. **No screen with a flag is indistinguishable from a screen with none at the origin.** Cross-check state, not coordinates.
- **`ScreenPointToWorldRay` is `void`.** `MissionScreen.cs:3483`. Unlike the two `GetProjectedMousePosition…` members (`:3524`, `:3530`) it gives you no indication that the ray is meaningless. Prefer those when you want a ground hit.
- **`MissionStartedRendering()` is about rendering, not safety.** `MissionScreen.cs:3543`. It is the right gate for presentation work and the wrong gate for touching simulation objects.
- **`TeleportMainAgentToCameraFocusForCheat` invalidates state.** `MissionScreen.cs:3670`, `public virtual`. It moves a live agent, so formation indices, AI targets and position caches go stale. Console-time only.
- **`RegisterRadialMenuObject` / `UnregisterRadialMenuObject` are not type-matched.** Generic-and-constrained at `MissionScreen.cs:3581` versus plain `object` at `:3589`, so a mismatched pair compiles. An unregistered object stays in the menu.
- **`AfterMissionTick` receives real time.** `MissionScreen.cs:4102`, parameter `realDt`. Work tuned against it will not scale with time dilation, and code assuming a clamped dt misbehaves under dilation.
- **Calling `OnEscape()` directly is not a key press.** `MissionScreen.cs:4145`. It bypasses the focus and input routing that produced the real key event.
- **Views attached and never unregistered outlive the mission.** `AddMissionView` (`MissionScreen.cs:3475`) and `RegisterView` (`:3658`) have no lifetime of their own; `UnregisterView` (`:3664`) is your responsibility, and during a menu transition there may be no screen to unregister from.
- **The class is not sealed but is not a mod extension point in general.** `MissionScreen.cs:21` has zero `sealed` occurrences, yet it is instantiated by the game state manager from `MissionState`. Subclassing works (see the example), but nothing routes the engine to *your* subclass.
- **Not a save participant.** No `[Serializable]`; it is screen state, rebuilt when the battle loads.

## Cross-Version Notes

The v1.4.5 file is 4753 lines under the `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Screens/` layout — note this source tree is `Modules.Native`, not `bin/`, so a page-declared `**File:**` beginning with `Modules.Native` must be resolved against `bannerlord-1.4.5\Bannerlord.Source\`, not against `bin\`. The same file name and namespace appear in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees with the same `[GameStateScreen(typeof(MissionState))]` binding (`MissionScreen.cs:20`) and the same lifecycle hook set. The **binding attribute and the lifecycle hooks are the stable part**, because they are what `ScreenBase` and the game state manager are coded against. What is most likely to drift is the **camera surface** — the `Set…Camera…` family and the console commands (`:778-813`) have grown steadily across versions as new camera modes were added, so do not assume a fixed set. The `IsDeploymentActive` magic `6` (`MissionScreen.cs:205`) is the most fragile single line on the page: `MissionMode`'s members are not version-stable, so this comparison is exactly the kind of thing that can start reporting the wrong phase after an update. **VERIFIED MEASURED for v1.4.5** (4753 lines, 2 public delegates, 54 `public`/`protected` members, 3 `protected virtual` seams, 4 `[CommandLineArgumentFunction]` commands verified at `:778` and `:797`; every cited line number checked with `sed -n`); the sibling version trees were compared at file-shape level only, not member by member.

## Dependencies

- Base type: `ScreenBase` from `TaleWorlds.ScreenSystem`, supplying the lifecycle overrides used here — `OnInitialize` (`MissionScreen.cs:328`), `OnActivate` (`:408`), `OnResume` (`:419`), `OnFrameTick` (`:557`), `OnDeactivate` (`:687`), `OnFinalize` (`:720`).
- State that activates it: [`MissionState`](../../campaign-ext/MissionState), named by `[GameStateScreen(typeof(MissionState))]` (`MissionScreen.cs:20`) and passed to the constructor (`:307`).
- Screen stack it must be on top of: `ScreenManager` from `TaleWorlds.ScreenSystem` — the gate every `public static` member tests (`:781`, `:790`).
- The mission it renders: [`Mission`](../../mission/Mission), whose `Mode` is what `IsDeploymentActive` inspects (`:205`).
- View layer it owns: [`MissionView`](../../mission-ext/MissionView), the base of everything attached by `AddMissionView` (`:3475`) and `RegisterView` (`:3658`).
- Live participants in the battle it displays: [`Agent`](../../mission/Agent) and `MissionPeer`, the inputs to `SetAgentToFollow` (`:3736`) and `GetPlayerAgentVisuals` (`:3731`).
- Bucket index: [mission-ext API index](../)