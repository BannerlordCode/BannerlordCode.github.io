---
title: "UserData"
description: "UserData: a public class in TaleWorlds.MountAndBlade.Launcher.Library.UserDatas; 12 exposed members (7 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# UserData

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class UserData`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

UserData lives in the TaleWorlds.MountAndBlade.Launcher.Library module, source file TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserData.cs. It is a public class; the inheritance chain is UserData. It exposes 12 public/protected members: 7 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UserData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`, inheritance chain UserData. The surface is method-led (methods 7/12, properties 4/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameType` | `public GameType GameType` | property |
| `SingleplayerData` | `public UserGameTypeData SingleplayerData` | property |
| `MultiplayerData` | `public UserGameTypeData MultiplayerData` | property |
| `DLLCheckData` | `public DLLCheckDataCollection DLLCheckData` | property |
| `UserData` | `public UserData()` | constructor |
| `GetUserModData` | `public UserModData GetUserModData(bool isMultiplayer, string id)` | method |
| `GetDLLLatestSizeInBytes` | `public uint? GetDLLLatestSizeInBytes(string dllName)` | method |
| `GetDLLLatestIsDangerous` | `public bool GetDLLLatestIsDangerous(string dllName)` | method |
| `GetDLLLatestVerifyInformation` | `public string GetDLLLatestVerifyInformation(string dllName)` | method |
| `SetDLLLatestSizeInBytes` | `public void SetDLLLatestSizeInBytes(string dllName, uint sizeInBytes)` | method |
| `SetDLLLatestVerifyInformation` | `public void SetDLLLatestVerifyInformation(string dllName, string verifyInformation)` | method |
| `SetDLLLatestIsDangerous` | `public void SetDLLLatestIsDangerous(string dllName, bool isDangerous)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DLLCheckData](../DLLCheckData/)
- [same namespace DLLCheckDataCollection](../DLLCheckDataCollection/)
- [same namespace GameType](../GameType/)
- [same namespace UserDataManager](../UserDataManager/)
