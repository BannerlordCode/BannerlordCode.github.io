---
title: "EmptyInputManager"
description: "IInputManager 的空实现，在屏幕键盘激活时返回全零设备状态"
---
# EmptyInputManager

**命名空间：** `TaleWorlds.InputSystem`
**模块：** `TaleWorlds.InputSystem`
**类型：** `internal class`
**基类：** `IInputManager`
**源文件：** `TaleWorlds.InputSystem/EmptyInputManager.cs`（声明见第 7 行）

## 概述

`EmptyInputManager` 是 `IInputManager` 契约的空对象实现。它不查询任何真实输入设备，所有方法都返回「无设备」的零值：坐标返回 0、控制器类型返回 `None`、剪贴板返回空字符串、陀螺仪返回 0f。

当游戏激活屏幕键盘时，`Input.InputManager` 会返回这个空实现，确保游戏逻辑在输入设备不可用时仍能安全运行。

## 心智模型

把它想象成一个「设备黑洞」：

- **它是输入管理层的占位板**：与 `EmptyInputContext` 类似，但作用在更高一层——`IInputManager` 管理的是设备状态（鼠标位置、控制器类型、剪贴板等），而 `IInputContext` 管理的是按键读数。
- **它永远回答「没有设备」**：无论你问它鼠标在哪、控制器是否连接、剪贴板里有什么，答案都是「零」「空」「无」。
- **它是 internal 的**：与 `EmptyInputContext` 不同，`EmptyInputManager` 是 `internal class`，mod 开发者无法直接实例化。它由游戏内部在屏幕键盘激活时自动切换。

使用模式：

```
正常状态 ──→ Input.InputManager（真实设备查询）
              │
屏幕键盘激活 ──→ EmptyInputManager（全零设备状态）
              │
屏幕键盘关闭 ──→ Input.InputManager（恢复真实设备查询）
```

## 怎么用

### 怎么拿到

源树路径：`bannerlord-1.4.7/TaleWorlds.InputSystem/EmptyInputManager.cs:7`

```csharp
// EmptyInputManager 是 internal class，mod 开发者无法直接实例化
// 它由 Input.InputManager 在屏幕键盘激活时自动返回
// 你只能通过 IInputManager 接口引用它：

IInputManager manager = Input.InputManager;
// 当屏幕键盘激活时，manager 实际上是 EmptyInputManager 实例
```

### 典型用法

```csharp
// 场景 1：检测当前是否处于空输入状态（屏幕键盘激活）
public bool IsScreenKeyboardActive()
{
    return Input.InputManager is EmptyInputManager;
}

// 场景 2：在屏幕键盘激活期间安全地读取设备状态
public void SafeReadDeviceState()
{
    IInputManager manager = Input.InputManager;
    
    // 即使屏幕键盘激活，这些调用也不会崩溃，只是返回零值
    float mouseX = manager.GetMousePositionX();  // 返回 0
    ControllerTypes type = manager.GetControllerType();  // 返回 None
    string clipboard = manager.GetClipboardText();  // 返回 string.Empty
}

// 场景 3：在自定义 UI 中判断输入来源
public void HandleInput()
{
    if (Input.InputManager.GetControllerType() == ControllerTypes.None)
    {
        // 无控制器连接，可能是屏幕键盘激活或纯键鼠模式
        ShowOnScreenKeyboardHint();
    }
}
```

### 坑

- **它是 internal 的**：mod 开发者无法 `new EmptyInputManager()`，也无法通过 `is EmptyInputManager` 做类型检查（除非使用反射）。如果你需要检测空输入状态，应该通过行为判断（如所有读数都为零）而非类型判断。
- **它不触发任何事件**：与 `EmptyInputContext` 一样，空实现只回答查询，不产生任何输入事件或回调。
- **屏幕键盘期间设备状态不可信**：在屏幕键盘激活期间，`GetMousePositionX` 等方法返回的 0 是「无设备」的占位值，不代表鼠标真的在 (0,0) 位置。如果你的逻辑依赖精确的设备状态，需要自行判断当前是否处于空输入状态。
- **与 EmptyInputContext 的切换时机可能不同步**：`Input.InputManager` 和 `Input.InputContext` 是两个独立的属性，它们的切换时机可能不完全一致。在屏幕键盘激活/关闭的边界帧，可能出现一个是空实现、另一个是真实实现的情况。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `ClearKeys()` | 清空按键状态，空实现无操作 |
| `GetClickKeys()` → 空数组 | 获取点击键列表，恒返回空数组 |
| `GetClipboardText()` → string.Empty | 获取剪贴板文本，恒返回空字符串 |
| `GetControllerType()` → ControllerTypes.None | 获取控制器类型，恒返回 None |
| `GetDesktopResolution()` → Vec2.Zero | 获取桌面分辨率，恒返回零向量 |
| `GetGyroX()` → 0f | 陀螺仪 X 轴，恒返回 0 |
| `GetGyroY()` → 0f | 陀螺仪 Y 轴，恒返回 0 |
| `GetGyroZ()` → 0f | 陀螺仪 Z 轴，恒返回 0 |
| `GetKeyState()` → Vec2.Zero | 获取按键状态，恒返回零向量 |
| `GetMouseDeltaZ()` → 0f | 鼠标滚轮增量，恒返回 0 |
| `GetMouseMoveX()` → 0f | 鼠标 X 轴移动量，恒返回 0 |
| `GetMouseMoveY()` → 0f | 鼠标 Y 轴移动量，恒返回 0 |

## 真实示例

```csharp
// 来自 EmptyInputManager.cs 的真实实现（第 21-27 行）
public string GetClipboardText()
{
    return string.Empty;
}

public ControllerTypes GetControllerType()
{
    return ControllerTypes.None;
}

// 来自 EmptyInputManager.cs 的真实实现（第 39-45 行）
public float GetGyroX()
{
    return 0f;
}
```

## 参见

- [IInputManager](../IInputManager)
- [EmptyInputContext](../EmptyInputContext)
- [../../mission/Mission](../../mission/Mission)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
