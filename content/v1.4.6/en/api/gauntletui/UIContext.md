---
title: "UIContext"
description: "UIContext: a public class in TaleWorlds.GauntletUI; 49 exposed members (21 methods, 25 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/UIContext.cs."
---
# UIContext

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class UIContext`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/UIContext.cs`

## Overview

UIContext lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/UIContext.cs. It is a public class; the inheritance chain is UIContext. It exposes 49 public/protected members: 21 methods, 25 properties, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UIContext is a top-level type in TaleWorlds.GauntletUI, namespace matching the module directory; inheritance chain UIContext. The surface is property-led (properties 25/49, methods 21/49), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/UIContext.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActiveCursorOfContext` | `public UIContext.MouseCursors ActiveCursorOfContext` | property |
| `IsDynamicScaleEnabled` | `public bool IsDynamicScaleEnabled` | property |
| `ScaleModifier` | `public float ScaleModifier` | property |
| `Name` | `public string Name` | property |
| `IsActive` | `public bool IsActive` | property |
| `ContextAlpha` | `public float ContextAlpha` | property |
| `Scale` | `public float Scale` | property |
| `CustomScale` | `public float CustomScale` | property |
| `CustomInverseScale` | `public float CustomInverseScale` | property |
| `CurrentLanugageCode` | `public string CurrentLanugageCode` | property |
| `UIRandom` | `public Random UIRandom` | property |
| `InverseScale` | `public float InverseScale` | property |
| `EventManager` | `public EventManager EventManager` | property |
| `Root` | `public Widget Root` | property |
| `ResourceDepot` | `public ResourceDepot ResourceDepot` | property |
| `TwoDimensionContext` | `public TwoDimensionContext TwoDimensionContext` | property |
| `IEnumerable` | `public IEnumerable<Brush>Brushes` | property |
| `DefaultBrush` | `public Brush DefaultBrush` | property |
| `SpriteData` | `public SpriteData SpriteData` | property |
| `BrushFactory` | `public BrushFactory BrushFactory` | property |
| `FontFactory` | `public FontFactory FontFactory` | property |
| `InputContext` | `public IReadonlyInputContext InputContext` | property |
| `GamepadNavigation` | `public IGamepadNavigationContext GamepadNavigation` | property |
| `LocalFrameNumber` | `public ulong LocalFrameNumber` | property |
| `UIContext` | `public UIContext(TwoDimensionContext twoDimensionContext, IInputContext inputContext, SpriteData spriteData, FontFactory fontFactory, BrushFactory brushFactory)` | constructor |
| `UIContext` | `public UIContext(TwoDimensionContext twoDimensionContext, IInputContext inputContext)` | constructor |
| `Initialize` | `public void Initialize()` | method |
| `GetBrush` | `public Brush GetBrush(string name)` | method |
| `RefreshResources` | `public void RefreshResources(SpriteData spriteData, FontFactory fontFactory, BrushFactory brushFactory)` | method |
| `OnFinalize` | `public void OnFinalize()` | method |
| `Deactivate` | `public void Deactivate()` | method |
| `Activate` | `public void Activate()` | method |
| `Update` | `public void Update(float dt)` | method |
| `LateUpdate` | `public void LateUpdate(float dt)` | method |
| `RenderTick` | `public void RenderTick(float dt)` | method |
| `OnOnScreenkeyboardTextInputDone` | `public void OnOnScreenkeyboardTextInputDone(string inputText)` | method |
| `InitializeGamepadNavigation` | `public void InitializeGamepadNavigation(IGamepadNavigationContext context)` | method |
| `OnOnScreenKeyboardCanceled` | `public void OnOnScreenKeyboardCanceled()` | method |
| `HitTest` | `public bool HitTest(Widget root, Vector2 position)` | method |
| `HitTest` | `public bool HitTest(Widget root)` | method |
| `FocusTest` | `public bool FocusTest(Widget root)` | method |
| `SetIsMouseEnabled` | `public void SetIsMouseEnabled(bool isMouseEnabled)` | method |
| `UpdateInput` | `public void UpdateInput(InputType handleInputs)` | method |
| `OnMovieLoaded` | `public void OnMovieLoaded(string movieName)` | method |
| `OnMovieReleased` | `public void OnMovieReleased(string movieName)` | method |
| `CancelMouseClick` | `public void CancelMouseClick()` | method |
| `DrawWidgetDebugInfo` | `public void DrawWidgetDebugInfo()` | method |
| `MouseCursors` | `public enum MouseCursors` | property |
| `MouseCursors` | `public enum MouseCursors` | nested type |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlignmentAxis](../AlignmentAxis)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [same namespace AnimationInterpolation](../AnimationInterpolation)
- [same namespace AudioProperty](../AudioProperty)
