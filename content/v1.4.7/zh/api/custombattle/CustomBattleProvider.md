---
title: "CustomBattleProvider"
description: "自定义战斗模式在主菜单的入口登记处：实现 ICustomBattleProvider 接口，提供模式显示名并启动以 CustomGameManager 管理的新游戏。"
---
# CustomBattleProvider

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `public class CustomBattleProvider : ICustomBattleProvider`
**基类：** `ICustomBattleProvider`（接口）
**源文件：** `bannerlord-1.4.7/TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleProvider.cs`（声明见第 8 行）

## 概述
`CustomBattleProvider` 是自定义战斗模式对外的「入口登记处」：实现 `ICustomBattleProvider` 接口，向游戏主菜单注册「陆地自定义战斗」（Land Custom Battle）这一游戏模式。它只负责两件事——告诉系统这个模式叫什么名字（`GetName`），以及玩家选择该模式后如何启动一局（`StartCustomBattle`）。

## 心智模型
把主菜单想象成一个游戏模式列表，每个模式是一个 `ICustomBattleProvider` 条目。`CustomBattleProvider` 就是其中名为 "Land Custom Battle" 的那一条：`GetName` 提供菜单上显示的文字，`StartCustomBattle` 是点击后执行的动作——用 `CustomGameManager` 作为游戏管理器开启新游戏。真正的自定义战斗配置界面与逻辑在别处（如 `CustomBattleSubModule`），本类只是门牌。

## 怎么用
### 怎么拿到
不需要手动实例化：游戏在构建主菜单的游戏模式列表时会发现并调用它。mod 若想注册自己的模式，实现 `ICustomBattleProvider` 并让模块加载即可。

### 典型用法
```csharp
// 通过接口引用调用：获取模式名称并启动
ICustomBattleProvider provider = new CustomBattleProvider();
TextObject name = provider.GetName();
provider.StartCustomBattle();
```

### 坑
- `StartCustomBattle` 直接调用 `MBGameManager.StartNewGame(new CustomGameManager())`，会立即中断当前游戏流程；在错误的时机调用（如战斗进行中）会导致状态错乱。
- `GetName` 每次调用都新建 `TextObject` 实例，且本地化 key（{=RZyk1LZy}）缺失时直接显示 key 原文。
- 类无状态、无字段，所有行为都是即时的；不要缓存 `GetName` 的结果用于跨帧比较。

## 关键成员
| 成员 | 用途 |
|------|------|
| `StartCustomBattle()` | 启动一局自定义战斗：以 `CustomGameManager` 为管理器调用 `MBGameManager.StartNewGame`（CustomBattleProvider.cs:11）。 |
| `GetName()` | 返回该模式在菜单中的显示名 "Land Custom Battle"（CustomBattleProvider.cs:17）。 |

## 真实示例
```csharp
// 注册自定义战斗模式并启动
ICustomBattleProvider provider = new CustomBattleProvider();
Console.WriteLine(provider.GetName());
provider.StartCustomBattle();
```

## 参见
- [CustomBattleData](../CustomBattleData)
- [CustomBattleHelper](../CustomBattleHelper)
- [../../core-extra/Game](../../core-extra/Game)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
