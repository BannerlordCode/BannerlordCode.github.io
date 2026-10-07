---
title: "IFaceGeneratorHandler"
description: "Auto-generated class reference for IFaceGeneratorHandler."
---
# IFaceGeneratorHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IFaceGeneratorHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IFaceGeneratorHandler.cs`

## Overview

`IFaceGeneratorHandler` is the command surface the character-creation screen drives: fourteen members, every one of them `void`, taking either nothing or a name/flag pair (`IFaceGeneratorHandler.cs:9` through `IFaceGeneratorHandler.cs:51`).

It splits into four groups. Six camera presets: `ChangeToBodyCamera`, `ChangeToEyeCamera`, `ChangeToNoseCamera`, `ChangeToMouthCamera`, `ChangeToFaceCamera` and `ChangeToHairCamera` (`IFaceGeneratorHandler.cs:9`). Scene content: `RefreshCharacterEntity` (`IFaceGeneratorHandler.cs:27`), `UndressCharacterEntity` and `DressCharacterEntity` (`IFaceGeneratorHandler.cs:45`). Voice: `MakeVoice` and `MakeVoiceDelayed` (`IFaceGeneratorHandler.cs:29`). Flow control: `SetFacialAnimation(string faceAnimation, bool loop)` (`IFaceGeneratorHandler.cs:36`), `Done` and `Cancel` (`IFaceGeneratorHandler.cs:39`). Plus `DefaultFace()` (`IFaceGeneratorHandler.cs:51`).

The one shipped implementation is `BodyGeneratorView`, declared as `class BodyGeneratorView : IFaceGeneratorHandler` (`BodyGeneratorView.cs:21`) — a view that satisfies this contract.

## Mental Model

Every method is a command, never a query. There is no way to ask the handler what camera it is on, what animation is playing, or whether the character is dressed. If your screen needs that state you must keep it yourself and assume it matches what you last asked for — which is exactly the shape of a UI driven by a fixed button set.

The six camera methods are a closed enum in disguise. There is no `ChangeToCamera(CameraType)`; you pick the method, so a screen that wants a data-driven camera list has to map its own values onto these six calls. Adding a seventh viewpoint means adding a member to the interface, which breaks every implementation.

`MakeVoice` versus `MakeVoiceDelayed` is the one pair whose difference is not visible from the names. Both are parameterless and both return `void` (`IFaceGeneratorHandler.cs:29`, `IFaceGeneratorHandler.cs:32`); the timing distinction lives entirely in the implementation. Read the implementation before assuming which to call when — the interface makes no promise about whether the voice overlaps the animation change that preceded it.

`SetFacialAnimation(string faceAnimation, bool loop)` is the only member taking data (`IFaceGeneratorHandler.cs:36`), and it takes a *name*, not a handle or an id. The `loop` flag is the difference between an animation that plays once and one that runs until something replaces it — so a looped animation you never replace keeps running, and the interface offers no stop other than `SetFacialAnimation` with another name or the screen tearing down.

`Done` and `Cancel` are the terminal pair (`IFaceGeneratorHandler.cs:39`, `IFaceGeneratorHandler.cs:42`), and the interface does not say whether they are mutually exclusive, idempotent, or safe to call twice. Treat them as one-shot and do not assume a second call is harmless.

`UndressCharacterEntity` and `DressCharacterEntity` are not a matched pair in this interface either — nothing guarantees that undressing twice, or dressing without undressing, is a no-op.

## How to use

**Getting one.** The character-creation screen holds one; the shipped `BodyGeneratorView` (`BodyGeneratorView.cs:21`) is the implementation. Implement the interface yourself only if you are building an alternative body/face screen.

**Typical use** — driving the handler from your own screen:

```csharp
using TaleWorlds.MountAndBlade;

public static class MyFaceScreen
{
    private static IFaceGeneratorHandler _handler;

    public static void OnCharacterSelected(IFaceGeneratorHandler handler)
    {
        _handler = handler;
    }

    public static void ShowHairAndPlayVoice(bool loop)
    {
        if (_handler == null)
        {
            return;
        }

        // Commands only: there is no way to read the current camera back.
        _handler.ChangeToHairCamera();
        _handler.RefreshCharacterEntity();
        _handler.SetFacialAnimation("happy", loop);
        _handler.MakeVoiceDelayed();
    }

    public static void Finish(bool accepted)
    {
        if (_handler == null)
        {
            return;
        }

        if (accepted)
        {
            _handler.Done();
        }
        else
        {
            _handler.Cancel();
        }

        _handler = null;
    }
}
```

`ChangeToHairCamera()` and `RefreshCharacterEntity()` are members of the interface itself (`IFaceGeneratorHandler.cs:24`, `IFaceGeneratorHandler.cs:27`), so the example calls only real interface members.

**Most common mistake:** polling the handler to find out what it is doing.

```csharp
// Does not exist and never will: the interface has no getters at all.
FaceGeneratorHandler.CurrentCamera();
```

All fourteen members are parameterless-or-primitive commands with `void` returns (`IFaceGeneratorHandler.cs:9`), so there is no query surface at all. Code written expecting a getter either compiles against some other type or not at all — and if you hold a `BodyGeneratorView` rather than the interface, you are depending on members this contract does not promise. Track the state in your screen, as the example does, and treat the handler purely as something you command.

## See Also

- [Area Index](../)
- [BodyGeneratorView — the shipped implementation of this contract](../BodyGeneratorView)
- [中文页面](../../../../zh/api/mission-ext/IFaceGeneratorHandler)