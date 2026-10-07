---
title: "HotKey"
description: "表示一个可包含修饰键与多键组合的快捷键，支持按下、双击与修饰键匹配查询。"
---
# HotKey

**命名空间：** `TaleWorlds.InputSystem`
**模块：** `TaleWorlds.InputSystem`
**类型：** `class`
**基类：** `object`
**源文件：** `bannerlord-1.4.7/TaleWorlds.InputSystem/HotKey.cs`（声明见第 9 行）

## 概述

`HotKey` 把「快捷键」抽象成一到多个 `Key` 的组合，并可附带 Control / Alt / Shift 等修饰键。与 `GameKey` 的单一按键不同，`HotKey` 关心的是「这一组键是否同时满足」，因此它提供 `HasModifier` / `HasSameModifiers` 这样的修饰键匹配能力，以及 `IsDoublePressed` 这种双击判定。快捷键通常用于菜单、命令触发等「组合触发」场景，而不是持续按住移动。

## 心智模型

把 `HotKey` 想成一道「组合锁」：`Keys` 是锁里需要同时按下的几把钥匙，`Modifiers` 是必须同时踩下的脚踏板（Control/Alt/Shift）。`IsDown` 问的是「锁当前是否被按住」，`IsPressed` 问的是「这一帧锁是否刚被触发」，`IsDoublePressed` 问的是「是否在极短时间内被触发了两次」。`DefaultKeys` 保存出厂组合，用于一键还原。

## 怎么用

### 怎么拿到

源树路径：`bannerlord-1.4.7/TaleWorlds.InputSystem/HotKey.cs`（类声明见第 9 行）。`HotKey` 一般由输入系统在初始化时按配置创建并注册，通过快捷键注册表按名称或 ID 查找；需要自定义组合时可用多键构造函数（第 33 行）或单键构造函数（第 48 行）手动构建。

### 典型用法

```csharp
HotKey saveKey = InputManager.FindHotKey("quickSave");
if (saveKey.IsPressed())
{
    // 本帧快捷键被触发
}
```

### 坑

- `IsDown` 要求组合内所有键同时按住，只按一部分不会触发。
- `IsDoublePressed` 依赖时间窗口，窗口过短会漏判、过长会误判，调整前先看默认阈值。
- `HasModifier` 与 `HasSameModifiers` 语义不同：前者判断「是否带某修饰键」，后者判断「修饰键集合是否完全一致」，用于匹配时别用错。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `Keys` | 当前生效的按键组合 |
| `DefaultKeys` | 默认按键组合 |
| `IsDown` | 查询组合是否被按住 |
| `IsDownImmediate` | 查询组合即时按住状态 |
| `IsDoublePressed` | 查询是否在时间窗口内被触发两次 |
| `IsPressed` | 查询本帧是否刚触发 |
| `IsReleased` | 查询本帧是否刚释放 |
| `HasModifier` | 判断是否带有指定修饰键 |
| `HasSameModifiers` | 判断修饰键集合是否完全一致 |
| `ToString` | 返回快捷键的可读名称 |
| `Equals` | 比较两个快捷键是否相同 |
| `GetHashCode` | 返回哈希码 |
| `Modifiers` | 内部枚举，定义 Control / Alt / Shift 等修饰键 |

## 真实示例

```csharp
HotKey key = InputManager.FindHotKey("quickSave");
bool held = key.IsDown();
bool dbl = key.IsDoublePressed();
bool hasCtrl = key.HasModifier(HotKey.Modifiers.Control);
```

## 参见

- [GameKey](../GameKey)
- [Key](../Key)
- [../../mission/Mission](../../mission/Mission)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
