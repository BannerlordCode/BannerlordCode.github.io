---
title: "EmptyInputContext"
description: "IInputContext 的空实现，在没有真实输入设备时返回全零读数"
---
# EmptyInputContext

**命名空间：** `TaleWorlds.InputSystem`
**模块：** `TaleWorlds.InputSystem`
**类型：** `public sealed class`
**基类：** `IInputContext`
**源文件：** `TaleWorlds.InputSystem/EmptyInputContext.cs`（声明见第 8 行）

## 概述

`EmptyInputContext` 是 `IInputContext` 契约的空对象（Null Object）实现。它不读取任何真实输入设备，所有查询方法都返回「无输入」的零值：坐标返回 0、按键状态返回 false、轴向值返回 0f。

游戏在特定场景下会切换到这个实现——最典型的是屏幕键盘（Screen Keyboard）激活期间，此时物理输入被临时屏蔽，游戏逻辑需要一个「什么都不按」的上下文来安全地继续运行，而不是到处判空。

## 心智模型

把它想象成一个「输入黑洞」：

- **它是一块占位板**：当真实输入不可用时，游戏代码仍然可以照常调用 `IsGameKeyDown` 之类的方法，不需要写 `if (context != null)` 这种防御性代码。
- **它永远回答「没有」**：无论你问它什么键、什么轴，答案都是「没按」「零」。这是确定性的、无副作用的。
- **它是可替换的**：因为 `IInputContext` 是接口，真实实现和空实现可以在运行期无缝切换。调用方代码完全感知不到差异。

使用模式：

```
正常状态 ──→ RealInputContext（真实读数）
              │
屏幕键盘激活 ──→ EmptyInputContext（全零读数）
              │
屏幕键盘关闭 ──→ RealInputContext（恢复真实读数）
```

## 怎么用

### 怎么拿到

源树路径：`bannerlord-1.4.7/TaleWorlds.InputSystem/EmptyInputContext.cs:8`

```csharp
// 游戏内部在屏幕键盘激活时自动切换，mod 开发者通常不需要手动创建
// 但如果你需要手动构造一个空上下文（例如在自定义 UI 中屏蔽输入）：
IInputContext empty = new EmptyInputContext();
```

### 典型用法

```csharp
// 场景 1：在自定义 UI 屏幕中临时屏蔽游戏输入
public class MyCustomScreen : ScreenBase
{
    public override void OnActivate()
    {
        // 保存真实上下文，切换到空上下文
        _previousContext = InputManager.InputContext;
        InputManager.InputContext = new EmptyInputContext();
    }

    public override void OnDeactivate()
    {
        // 恢复真实上下文
        InputManager.InputContext = _previousContext;
    }
}

// 场景 2：单元测试中模拟「无输入」状态
[Test]
public void TestBehaviorWhenNoInput()
{
    var context = new EmptyInputContext();
    Assert.IsFalse(context.IsGameKeyDown(GameKey.W));
    Assert.AreEqual(0f, context.GetPointerX());
}
```

### 坑

- **不要缓存引用**：`EmptyInputContext` 实例通常由输入管理器在内部创建和切换，mod 开发者不应长期持有其引用，否则可能在恢复真实输入后仍读到零值。
- **它不触发事件**：空上下文只回答查询，不会产生任何输入事件。如果你的逻辑依赖 `OnKeyPress` 之类的回调，切换到空上下文后这些回调将不再触发。
- **屏幕键盘期间游戏逻辑仍在运行**：虽然输入被屏蔽，但游戏的主循环、AI、物理等仍在执行。如果你的 mod 在屏幕键盘激活期间有后台逻辑，需要自行判断当前是否处于空输入状态。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `GetPointerX()` → 0 | 指针 X 坐标，恒返回 0 |
| `GetPointerY()` → 0 | 指针 Y 坐标，恒返回 0 |
| `GetPointerPosition()` → Vector2(0,0) | 指针位置，恒返回零向量 |
| `IsGameKeyDown(GameKey)` → false | 游戏键是否按住，恒返回 false |
| `IsGameKeyDownImmediate(GameKey)` → false | 游戏键是否本帧按住（立即模式），恒返回 false |
| `IsGameKeyPressed(GameKey)` → false | 游戏键是否本帧按下，恒返回 false |
| `IsGameKeyReleased(GameKey)` → false | 游戏键是否本帧释放，恒返回 false |
| `GetGameKeyAxis(GameKey)` → 0f | 游戏键轴向值，恒返回 0 |
| `IsHotKeyDown(HotKey)` → false | 热键是否按住，恒返回 false |
| `IsHotKeyReleased(HotKey)` → false | 热键是否本帧释放，恒返回 false |
| `IsHotKeyPressed(HotKey)` → false | 热键是否本帧按下，恒返回 false |
| `IsHotKeyDoublePressed(HotKey)` → false | 热键是否双击，恒返回 false |

## 真实示例

```csharp
// 来自 EmptyInputContext.cs 的真实实现（第 29-35 行）
public bool IsGameKeyDown(GameKey key)
{
    return false;
}

public bool IsGameKeyDownImmediate(GameKey key)
{
    return false;
}

// 来自 EmptyInputContext.cs 的真实实现（第 53 行）
public float GetGameKeyAxis(GameKey key)
{
    return 0f;
}
```

## 参见

- [IInputContext](../IInputContext)
- [EmptyInputManager](../EmptyInputManager)
- [../../core-extra/Game](../../core-extra/Game)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
