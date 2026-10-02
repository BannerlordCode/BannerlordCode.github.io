---
title: "BannerManager"
description: "BannerManager: a public class in TaleWorlds.Core; 26 exposed members (14 methods, 3 properties, 9 fields). Source: TaleWorlds.Core/BannerManager.cs."
---
# BannerManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BannerManager`
**File:** `TaleWorlds.Core/BannerManager.cs`

## Overview

BannerManager lives in the TaleWorlds.Core module, source file TaleWorlds.Core/BannerManager.cs. It is a public class; the inheritance chain is BannerManager. It exposes 26 public/protected members: 14 methods, 3 properties, 9 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerManager is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain BannerManager. The surface is method-led (methods 14/26, properties 3/26), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/BannerManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static BannerManager Instance` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<BannerIconGroup>BannerIconGroups` | property |
| `BaseBackgroundId` | `public int BaseBackgroundId` | property |
| `Initialize` | `public static void Initialize()` | method |
| `ResetAndLoad` | `public static void ResetAndLoad()` | method |
| `GetColor` | `public static uint GetColor(int id)` | method |
| `GetColorId` | `public static int GetColorId(uint color)` | method |
| `GetRandomColorId` | `public int GetRandomColorId(MBFastRandom random)` | method |
| `GetIconDataFromIconId` | `public BannerIconData GetIconDataFromIconId(int id)` | method |
| `GetRandomBackgroundId` | `public int GetRandomBackgroundId(MBFastRandom random)` | method |
| `GetRandomBannerIconId` | `public int GetRandomBannerIconId(MBFastRandom random)` | method |
| `GetBackgroundMeshName` | `public string GetBackgroundMeshName(int id)` | method |
| `GetIconSourceTextureName` | `public string GetIconSourceTextureName(int id)` | method |
| `SetBaseBackgroundId` | `public void SetBaseBackgroundId(int id)` | method |
| `SetCultureColors` | `public void SetCultureColors(BasicCultureObject culture, List<BannerColor>color)` | method |
| `LoadBannerIcons` | `public void LoadBannerIcons()` | method |
| `LoadBannerIcons` | `public void LoadBannerIcons(string xmlPath)` | method |
| `DarkRed` | `public const int DarkRed` | field |
| `Green` | `public const int Green` | field |
| `Blue` | `public const int Blue` | field |
| `Purple` | `public const int Purple` | field |
| `DarkPurple` | `public const int DarkPurple` | field |
| `Orange` | `public const int Orange` | field |
| `DarkBlue` | `public const int DarkBlue` | field |
| `Red` | `public const int Red` | field |
| `Yellow` | `public const int Yellow` | field |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
