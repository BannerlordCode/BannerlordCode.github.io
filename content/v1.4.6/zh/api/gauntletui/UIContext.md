---
title: "UIContext"
description: "UIContext：TaleWorlds.GauntletUI 的 public 类；公开成员 49 个（方法 21、属性 25、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/UIContext.cs。"
---
# UIContext

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class UIContext`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/UIContext.cs`

## 概述

UIContext 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/UIContext.cs。它是一个 public 类，继承链为 UIContext。public/protected 成员共 49 个：21 方法、25 属性、2 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：UIContext 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 UIContext。成员构成以属性为主（属性 25/49，方法 21/49），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/UIContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActiveCursorOfContext` | `public UIContext.MouseCursors ActiveCursorOfContext` | 属性 |
| `IsDynamicScaleEnabled` | `public bool IsDynamicScaleEnabled` | 属性 |
| `ScaleModifier` | `public float ScaleModifier` | 属性 |
| `Name` | `public string Name` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `ContextAlpha` | `public float ContextAlpha` | 属性 |
| `Scale` | `public float Scale` | 属性 |
| `CustomScale` | `public float CustomScale` | 属性 |
| `CustomInverseScale` | `public float CustomInverseScale` | 属性 |
| `CurrentLanugageCode` | `public string CurrentLanugageCode` | 属性 |
| `UIRandom` | `public Random UIRandom` | 属性 |
| `InverseScale` | `public float InverseScale` | 属性 |
| `EventManager` | `public EventManager EventManager` | 属性 |
| `Root` | `public Widget Root` | 属性 |
| `ResourceDepot` | `public ResourceDepot ResourceDepot` | 属性 |
| `TwoDimensionContext` | `public TwoDimensionContext TwoDimensionContext` | 属性 |
| `IEnumerable` | `public IEnumerable<Brush>Brushes` | 属性 |
| `DefaultBrush` | `public Brush DefaultBrush` | 属性 |
| `SpriteData` | `public SpriteData SpriteData` | 属性 |
| `BrushFactory` | `public BrushFactory BrushFactory` | 属性 |
| `FontFactory` | `public FontFactory FontFactory` | 属性 |
| `InputContext` | `public IReadonlyInputContext InputContext` | 属性 |
| `GamepadNavigation` | `public IGamepadNavigationContext GamepadNavigation` | 属性 |
| `LocalFrameNumber` | `public ulong LocalFrameNumber` | 属性 |
| `UIContext` | `public UIContext(TwoDimensionContext twoDimensionContext, IInputContext inputContext, SpriteData spriteData, FontFactory fontFactory, BrushFactory brushFactory)` | 构造函数 |
| `UIContext` | `public UIContext(TwoDimensionContext twoDimensionContext, IInputContext inputContext)` | 构造函数 |
| `Initialize` | `public void Initialize()` | 方法 |
| `GetBrush` | `public Brush GetBrush(string name)` | 方法 |
| `RefreshResources` | `public void RefreshResources(SpriteData spriteData, FontFactory fontFactory, BrushFactory brushFactory)` | 方法 |
| `OnFinalize` | `public void OnFinalize()` | 方法 |
| `Deactivate` | `public void Deactivate()` | 方法 |
| `Activate` | `public void Activate()` | 方法 |
| `Update` | `public void Update(float dt)` | 方法 |
| `LateUpdate` | `public void LateUpdate(float dt)` | 方法 |
| `RenderTick` | `public void RenderTick(float dt)` | 方法 |
| `OnOnScreenkeyboardTextInputDone` | `public void OnOnScreenkeyboardTextInputDone(string inputText)` | 方法 |
| `InitializeGamepadNavigation` | `public void InitializeGamepadNavigation(IGamepadNavigationContext context)` | 方法 |
| `OnOnScreenKeyboardCanceled` | `public void OnOnScreenKeyboardCanceled()` | 方法 |
| `HitTest` | `public bool HitTest(Widget root, Vector2 position)` | 方法 |
| `HitTest` | `public bool HitTest(Widget root)` | 方法 |
| `FocusTest` | `public bool FocusTest(Widget root)` | 方法 |
| `SetIsMouseEnabled` | `public void SetIsMouseEnabled(bool isMouseEnabled)` | 方法 |
| `UpdateInput` | `public void UpdateInput(InputType handleInputs)` | 方法 |
| `OnMovieLoaded` | `public void OnMovieLoaded(string movieName)` | 方法 |
| `OnMovieReleased` | `public void OnMovieReleased(string movieName)` | 方法 |
| `CancelMouseClick` | `public void CancelMouseClick()` | 方法 |
| `DrawWidgetDebugInfo` | `public void DrawWidgetDebugInfo()` | 方法 |
| `MouseCursors` | `public enum MouseCursors` | 属性 |
| `MouseCursors` | `public enum MouseCursors` | 嵌套类型 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlignmentAxis](../AlignmentAxis)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation)
- [同命名空间 AudioProperty](../AudioProperty)
