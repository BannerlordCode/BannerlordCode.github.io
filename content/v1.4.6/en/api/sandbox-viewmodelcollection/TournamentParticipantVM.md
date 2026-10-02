---
title: "TournamentParticipantVM"
description: "TournamentParticipantVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 19 exposed members (4 methods, 13 properties, 0 fields). Source: SandBox.ViewModelCollection/Tournament/TournamentParticipantVM.cs."
---
# TournamentParticipantVM

**Namespace:** `SandBox.ViewModelCollection.Tournament`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TournamentParticipantVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentParticipantVM.cs`

## Overview

TournamentParticipantVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Tournament/TournamentParticipantVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TournamentParticipantVM → ViewModel. It exposes 19 public/protected members: 4 methods, 13 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentParticipantVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Tournament) the module directory; inheritance chain TournamentParticipantVM → ViewModel. The surface is property-led (properties 13/19, methods 4/19), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Tournament/TournamentParticipantVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Participant` | `public TournamentParticipant Participant` | property |
| `TournamentParticipantVM` | `public TournamentParticipantVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Refresh` | `public void Refresh(TournamentParticipant participant, Color teamColor)` | method |
| `ExecuteOpenEncyclopedia` | `public void ExecuteOpenEncyclopedia()` | method |
| `Refresh` | `public void Refresh()` | method |
| `IsInitialized` | `public bool IsInitialized` | property |
| `IsValid` | `public bool IsValid` | property |
| `IsDead` | `public bool IsDead` | property |
| `IsMainHero` | `public bool IsMainHero` | property |
| `TeamColor` | `public Color TeamColor` | property |
| `Visual` | `public CharacterImageIdentifierVM Visual` | property |
| `State` | `public int State` | property |
| `IsQualifiedForNextRound` | `public bool IsQualifiedForNextRound` | property |
| `Score` | `public string Score` | property |
| `Name` | `public string Name` | property |
| `Character` | `public CharacterViewModel Character` | property |
| `TournamentPlayerState` | `public enum TournamentPlayerState` | property |
| `TournamentPlayerState` | `public enum TournamentPlayerState` | nested type |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TournamentMatchVM](../TournamentMatchVM)
- [same namespace TournamentRoundVM](../TournamentRoundVM)
- [same namespace TournamentTeamVM](../TournamentTeamVM)
- [same namespace TournamentVM](../TournamentVM)
