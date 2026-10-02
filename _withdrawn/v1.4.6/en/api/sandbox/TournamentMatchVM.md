---
title: "TournamentMatchVM"
description: "TournamentMatchVM: a public class in SandBox.ViewModelCollection.Tournament, inheriting ViewModel; 19 exposed members (7 methods, 10 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Tournament/TournamentMatchVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentMatchVM

**Namespace:** `SandBox.ViewModelCollection.Tournament`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TournamentMatchVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentMatchVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TournamentMatchVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Tournament/TournamentMatchVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TournamentMatchVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 19 public/protected members: 7 methods, 10 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentMatchVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Tournament`, inheritance chain TournamentMatchVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 10/19, methods 7/19), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Tournament/TournamentMatchVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Match` | `public TournamentMatch Match` | property |
| `List` | `public List<TournamentTeamVM>Teams` | property |
| `TournamentMatchVM` | `public TournamentMatchVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Initialize` | `public void Initialize()` | method |
| `Initialize` | `public void Initialize(TournamentMatch match)` | method |
| `Refresh` | `public void Refresh(bool forceRefresh)` | method |
| `RefreshActiveMatch` | `public void RefreshActiveMatch()` | method |
| `Refresh` | `public void Refresh(TournamentMatchVM target)` | method |
| `IEnumerable` | `public IEnumerable<TournamentParticipantVM>GetParticipants()` | method |
| `IsValid` | `public bool IsValid` | property |
| `State` | `public int State` | property |
| `Count` | `public int Count` | property |
| `Team1` | `public TournamentTeamVM Team1` | property |
| `Team2` | `public TournamentTeamVM Team2` | property |
| `Team3` | `public TournamentTeamVM Team3` | property |
| `Team4` | `public TournamentTeamVM Team4` | property |
| `TournamentMatchState` | `public enum TournamentMatchState` | property |
| `TournamentMatchState` | `public enum TournamentMatchState` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace TournamentParticipantVM](../TournamentParticipantVM/)
- [same namespace TournamentRoundVM](../TournamentRoundVM/)
- [same namespace TournamentTeamVM](../TournamentTeamVM/)
- [same namespace TournamentVM](../TournamentVM/)
