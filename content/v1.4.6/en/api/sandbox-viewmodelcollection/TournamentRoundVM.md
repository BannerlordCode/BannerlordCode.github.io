---
title: "TournamentRoundVM"
description: "TournamentRoundVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 18 exposed members (4 methods, 13 properties, 0 fields). Source: SandBox.ViewModelCollection/Tournament/TournamentRoundVM.cs."
---
# TournamentRoundVM

**Namespace:** `SandBox.ViewModelCollection.Tournament`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TournamentRoundVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tournament/TournamentRoundVM.cs`

## Overview

TournamentRoundVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Tournament/TournamentRoundVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TournamentRoundVM → ViewModel. It exposes 18 public/protected members: 4 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentRoundVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Tournament) the module directory; inheritance chain TournamentRoundVM → ViewModel. The surface is property-led (properties 13/18, methods 4/18), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Tournament/TournamentRoundVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Round` | `public TournamentRound Round` | property |
| `List` | `public List<TournamentMatchVM>Matches` | property |
| `TournamentRoundVM` | `public TournamentRoundVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `IsValid` | `public bool IsValid` | property |
| `Name` | `public string Name` | property |
| `Count` | `public int Count` | property |
| `Match1` | `public TournamentMatchVM Match1` | property |
| `Match2` | `public TournamentMatchVM Match2` | property |
| `Match3` | `public TournamentMatchVM Match3` | property |
| `Match4` | `public TournamentMatchVM Match4` | property |
| `Match5` | `public TournamentMatchVM Match5` | property |
| `Match6` | `public TournamentMatchVM Match6` | property |
| `Match7` | `public TournamentMatchVM Match7` | property |
| `Match8` | `public TournamentMatchVM Match8` | property |
| `Initialize` | `public void Initialize()` | method |
| `Initialize` | `public void Initialize(TournamentRound round, TextObject name)` | method |
| `IEnumerable` | `public IEnumerable<TournamentParticipantVM>GetParticipants()` | method |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TournamentMatchVM](../TournamentMatchVM)
- [same namespace TournamentParticipantVM](../TournamentParticipantVM)
- [same namespace TournamentTeamVM](../TournamentTeamVM)
- [same namespace TournamentVM](../TournamentVM)
