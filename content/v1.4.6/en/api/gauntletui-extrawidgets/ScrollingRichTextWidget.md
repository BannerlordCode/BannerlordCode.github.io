---
title: "ScrollingRichTextWidget"
description: "ScrollingRichTextWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting RichTextWidget; 10 exposed members (3 methods, 6 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/ScrollingRichTextWidget.cs."
---
# ScrollingRichTextWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class ScrollingRichTextWidget : RichTextWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/ScrollingRichTextWidget.cs`

## Overview

ScrollingRichTextWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/ScrollingRichTextWidget.cs. It is a public class, implementing/inheriting RichTextWidget; the inheritance chain is ScrollingRichTextWidget → RichTextWidget. It exposes 10 public/protected members: 3 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScrollingRichTextWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain ScrollingRichTextWidget → RichTextWidget. The surface is property-led (properties 6/10, methods 3/10), so it mostly exposes state for reading. RichTextWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/ScrollingRichTextWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActualText` | `public string ActualText` | property |
| `ScrollingRichTextWidget` | `public ScrollingRichTextWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnBrushChanged` | `public override void OnBrushChanged()` | method |
| `SetText` | `protected override void SetText(string value)` | method |
| `ScrollOnHoverWidget` | `public Widget ScrollOnHoverWidget` | property |
| `IsAutoScrolling` | `public bool IsAutoScrolling` | property |
| `ScrollPerTick` | `public float ScrollPerTick` | property |
| `InbetweenScrollDuration` | `public float InbetweenScrollDuration` | property |
| `DefaultTextHorizontalAlignment` | `public TextHorizontalAlignment DefaultTextHorizontalAlignment` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
