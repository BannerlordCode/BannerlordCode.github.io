---
title: "LauncherOnlineImageTextureWidget"
description: "LauncherOnlineImageTextureWidget: a public class in TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets, inheriting TextureWidget; 7 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherOnlineImageTextureWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherOnlineImageTextureWidget

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherOnlineImageTextureWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherOnlineImageTextureWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LauncherOnlineImageTextureWidget lives in the TaleWorlds.MountAndBlade.Launcher.Library module, source file TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherOnlineImageTextureWidget.cs. It is a public class, implementing/inheriting TextureWidget; the inheritance chain is LauncherOnlineImageTextureWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 2 methods, 3 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LauncherOnlineImageTextureWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets`, inheritance chain LauncherOnlineImageTextureWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 3/7, methods 2/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherOnlineImageTextureWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ImageSizePolicy` | `public LauncherOnlineImageTextureWidget.ImageSizePolicies ImageSizePolicy` | property |
| `LauncherOnlineImageTextureWidget` | `public LauncherOnlineImageTextureWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnTextureUpdated` | `protected override void OnTextureUpdated()` | method |
| `OnlineImageSourceUrl` | `public string OnlineImageSourceUrl` | property |
| `ImageSizePolicies` | `public enum ImageSizePolicies` | property |
| `ImageSizePolicies` | `public enum ImageSizePolicies` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextureWidget](../../gui/TextureWidget/)
- [same namespace LauncherBoolBrushWidget](../LauncherBoolBrushWidget/)
- [same namespace LauncherCircleLoadingAnimWidget](../LauncherCircleLoadingAnimWidget/)
- [same namespace LauncherDragWindowAreaWidget](../LauncherDragWindowAreaWidget/)
- [same namespace LauncherHintTriggerWidget](../LauncherHintTriggerWidget/)
