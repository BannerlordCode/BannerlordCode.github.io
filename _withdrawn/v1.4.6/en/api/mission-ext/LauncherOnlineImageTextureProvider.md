---
title: "LauncherOnlineImageTextureProvider"
description: "LauncherOnlineImageTextureProvider: a public class in TaleWorlds.MountAndBlade.Launcher.Library, inheriting TextureProvider; 4 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Library/LauncherOnlineImageTextureProvider.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherOnlineImageTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherOnlineImageTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherOnlineImageTextureProvider.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LauncherOnlineImageTextureProvider lives in the TaleWorlds.MountAndBlade.Launcher.Library module, source file TaleWorlds.MountAndBlade.Launcher.Library/LauncherOnlineImageTextureProvider.cs. It is a public class, implementing/inheriting TextureProvider; the inheritance chain is LauncherOnlineImageTextureProvider → TextureProvider. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LauncherOnlineImageTextureProvider lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Library`, inheritance chain LauncherOnlineImageTextureProvider → TextureProvider. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Library/LauncherOnlineImageTextureProvider.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnlineSourceUrl` | `public string OnlineSourceUrl` | property |
| `LauncherOnlineImageTextureProvider` | `public LauncherOnlineImageTextureProvider()` | constructor |
| `Tick` | `public override void Tick(float dt)` | method |
| `OnGetTextureForRender` | `protected override Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextureProvider](../../gui/TextureProvider/)
- [same namespace DependentVersionMissmatchItem](../DependentVersionMissmatchItem/)
- [same namespace DLLResult](../DLLResult/)
- [same namespace LauncherConfirmStartVM](../LauncherConfirmStartVM/)
- [same namespace LauncherDebugManager](../LauncherDebugManager/)
