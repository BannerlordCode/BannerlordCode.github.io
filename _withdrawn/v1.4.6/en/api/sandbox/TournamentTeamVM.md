---
title: "TournamentTeamVM"
description: "TournamentTeamVM: a public class in SandBox.ViewModelCollection.Tournament, inheriting ViewModel; 18 exposed members (5 methods, 12 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Tournament/TournamentTeamVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentTeamVM

**Namespace:** `SandBox.ViewModelCollection.Tournament`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TournamentTeamVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentTeamVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TournamentTeamVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Tournament/TournamentTeamVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TournamentTeamVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 18 public/protected members: 5 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentTeamVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Tournament`, inheritance chain TournamentTeamVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 12/18, methods 5/18), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Tournament/TournamentTeamVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `List` | `public List<TournamentParticipantVM>Participants` | property |
| `TournamentTeamVM` | `public TournamentTeamVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `IsValid` | `public bool IsValid` | property |
| `Score` | `public int Score` | property |
| `Participant1` | `public TournamentParticipantVM Participant1` | property |
| `Participant2` | `public TournamentParticipantVM Participant2` | property |
| `Participant3` | `public TournamentParticipantVM Participant3` | property |
| `Participant4` | `public TournamentParticipantVM Participant4` | property |
| `Participant5` | `public TournamentParticipantVM Participant5` | property |
| `Participant6` | `public TournamentParticipantVM Participant6` | property |
| `Participant7` | `public TournamentParticipantVM Participant7` | property |
| `Participant8` | `public TournamentParticipantVM Participant8` | property |
| `Count` | `public int Count` | property |
| `Initialize` | `public void Initialize()` | method |
| `Initialize` | `public void Initialize(TournamentTeam team)` | method |
| `Refresh` | `public void Refresh()` | method |
| `IEnumerable` | `public IEnumerable<TournamentParticipantVM>GetParticipants()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace TournamentMatchVM](../TournamentMatchVM/)
- [same namespace TournamentParticipantVM](../TournamentParticipantVM/)
- [same namespace TournamentRoundVM](../TournamentRoundVM/)
- [same namespace TournamentVM](../TournamentVM/)
