---
title: "IPlatformModuleExtension"
description: "由启动器或发行平台实现、供模块系统调用的平台桥接口，负责模块路径发现与平台授权检查。"
---
# IPlatformModuleExtension

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public interface IPlatformModuleExtension`
**Source:** `TaleWorlds.ModuleManager/IPlatformModuleExtension.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`IPlatformModuleExtension` 是**平台层与模块系统之间的接缝**。只有 5 个方法、没有任何属性：

| 方向 | 方法 |
| --- | --- |
| 生命周期 | `Initialize(List<string> args)` / `Destroy()` |
| 模块路径 | `string[] GetModulePaths()` |
| 启动器状态 | `void SetLauncherMode(bool isLauncherModeActive)` |
| 授权 | `bool CheckEntitlement(string title)` |

它**由启动器 / 发行平台侧实现**（谁托管游戏、谁知道模块装在哪、谁能向商店查授权，谁就实现它），引擎在启动流程里回调这些方法。游戏本体自己也能提供一个默认实现。

**关键：这不是给 mod 用的扩展点。** 名字里的 "Extension" 指的是「平台扩展模块系统」，不是「mod 扩展游戏」。

## 心智模型

把它想成**一个插在引擎上的转接头**，插头那侧是平台，插座那侧是模块系统：

```
[启动器 / 平台运行时]  ──implements──▶  IPlatformModuleExtension
                                              │  被引擎调用
                                              ▼
                                    [TaleWorlds.ModuleManager]
                                    · 从 GetModulePaths() 拿到候选目录
                                    · 用 SetLauncherMode(...) 得知当前是否在启动器上下文
                                    · 用 CheckEntitlement(title) 判断某内容是否已授权
```

三条心智规则：

1. **调用方是引擎，实现方是平台。** 作为 mod 开发者，你几乎永远是**消费方**（观察这些行为的结果），而不是实现方。
2. **它是"能力询问"接口，不是"配置"接口。** 没有一个方法能让你注册东西；它们全是平台**回答**引擎的问题。
3. **`GetModulePaths()` 返回的是"去哪找模块"，不是"加载了哪些模块"。** 路径可能包含不存在或空的目录，也不代表其中每个模块最终都会被加载（还要过依赖、分类、授权等关卡）。

## 怎么用

### 怎么拿到

作为 mod 开发者，你**通常拿不到也不需要**这个接口 —— 它由启动器持有，不通过 `ModuleHelper` 之类的公开入口暴露。

如果你在写**自定义启动器 / 平台集成**（例如自建启动流程、把游戏嵌入自己的客户端），那么你的做法是：

1. 写一个类实现 `IPlatformModuleExtension`；
2. 在构建模块系统 / 启动流程时把它交给引擎；
3. 之后由引擎主动调用你。

### 典型用法

实现方的最小骨架：

```csharp
using System.Collections.Generic;
using TaleWorlds.ModuleManager;

public sealed class MyPlatformExtension : IPlatformModuleExtension
{
    private readonly string _gameRoot;
    private bool _launcherModeActive;

    public MyPlatformExtension(string gameRoot)
    {
        _gameRoot = gameRoot;
    }

    // 启动时调用一次；args 是启动参数（如 -modpath=... 之类）
    public void Initialize(List<string> args)
    {
        _launcherModeActive = true;
        // 这里解析 args、准备模块根目录、初始化平台 SDK
    }

    // 关闭时调用；释放平台资源、句柄
    public void Destroy()
    {
        // 释放平台 SDK / 文件句柄 / 缓存
    }

    // 引擎问："去哪找模块？" —— 返回候选根目录（可多个）
    public string[] GetModulePaths()
    {
        return new[]
        {
            System.IO.Path.Combine(_gameRoot, "Modules"),
            System.IO.Path.Combine(_gameRoot, "UserData", "Modules"),
        };
    }

    // 引擎告知当前是否处于启动器上下文
    public void SetLauncherMode(bool isLauncherModeActive)
    {
        _launcherModeActive = isLauncherModeActive;
    }

    // 引擎问："这份内容已授权吗？"
    public bool CheckEntitlement(string title)
    {
        return true; // 平台侧应向商店 / 许可证服务查询后返回
    }
}
```

### 坑

- **不要为了 hook 游戏逻辑去实现它。** 这里没有一丁点游戏玩法钩子；想扩展玩法请用 Campaign / Mission 行为与 `MBSubModuleBase` 系列入口。
- **`GetModulePaths()` 的返回顺序有语义。** 它决定了同名模块谁先被发现 / 谁覆盖谁，乱排会导致"我的模块被另一个同名模块顶掉"。
- **`Initialize(List<string> args)` 与 `Destroy()` 必须成对。** 只实现 `Initialize` 而 `Destroy` 空着不清资源，在反复进出启动器时会泄漏平台句柄。
- **`SetLauncherMode` 是"状态通知"，不是"开关"。** 引擎用它告诉你当前上下文变了，你在实现里应据此调整行为（例如启动器模式下标路径不要做重活），而不是拿它去反向控制引擎。
- **`CheckEntitlement(string title)` 的 `title` 是平台侧标识，不是模块 Id。** 两者不是同一套命名，别直接把 `ModuleId` 塞进去当参数。
- **它不是线程安全契约。** 接口本身没有并发承诺，不要在别的线程上并发调用你实现的方法。

## 关键成员

| 成员 | 签名 | 说明 |
| --- | --- | --- |
| `Initialize` | `void Initialize(List<string> args)` | 平台扩展初始化入口，启动时由引擎调用一次，`args` 为启动参数。适合做平台 SDK 初始化、解析模块根路径。 |
| `Destroy` | `void Destroy()` | 平台扩展销毁入口，与 `Initialize` 配对，释放平台资源与句柄。 |
| `GetModulePaths` | `string[] GetModulePaths()` | 返回模块**候选搜索根目录**数组；顺序影响同名模块的优先级。只描述"去哪找"，不描述"加载了什么"。 |
| `SetLauncherMode` | `void SetLauncherMode(bool isLauncherModeActive)` | 引擎通知当前是否运行在启动器上下文中，实现方据此切换行为。 |
| `CheckEntitlement` | `bool CheckEntitlement(string title)` | 平台授权检查：给定平台侧内容标识 `title`，返回是否已授权。用于 DLC / 付费内容的可见性与可用性判断。 |

## 真实示例

**示例 1：一个只读路径、把授权查询转给平台 SDK 的实现**

```csharp
using System.Collections.Generic;
using System.IO;
using TaleWorlds.ModuleManager;

public sealed class SteamLikeExtension : IPlatformModuleExtension
{
    private readonly string _installDir;
    private bool _isLauncherModeActive;

    public SteamLikeExtension(string installDir) => _installDir = installDir;

    public void Initialize(List<string> args)
    {
        // 真实实现里这里会初始化平台 SDK、读取启动参数
        _isLauncherModeActive = false;
    }

    public void Destroy()
    {
        // 关闭平台 SDK
    }

    public string[] GetModulePaths()
    {
        return new[] { Path.Combine(_installDir, "Modules") };
    }

    public void SetLauncherMode(bool isLauncherModeActive)
    {
        _isLauncherModeActive = isLauncherModeActive;
    }

    public bool CheckEntitlement(string title)
    {
        // 真实实现：向平台查询 title 对应的授权
        return true;
    }
}
```

**示例 2：在自建启动流程中按接口要求提供实例（伪调用序）**

```csharp
var ext = new SteamLikeExtension(gameRoot);

ext.Initialize(new List<string> { "-modpath=C:/Games/Mount & Blade II Bannerlord/Modules" });

foreach (string root in ext.GetModulePaths())
{
    // 把 root 交给模块发现逻辑
}

ext.SetLauncherMode(true);      // 进入启动器上下文
// ... 启动器 UI / 模块选择 ...
ext.SetLauncherMode(false);     // 离开启动器，进入游戏

bool ownsDlc = ext.CheckEntitlement("some.dlc.title");

ext.Destroy();                  // 退出时释放
```

**示例 3（反例）：不要这样用**

```csharp
// ✗ 错误：mod 不应实现这个接口来"扩展玩法"
public sealed class MyModPlatformHack : IPlatformModuleExtension
{
    public void Initialize(List<string> args) { /* 想在这里挂钩游戏逻辑 —— 这里没有玩法钩子 */ }
    public void Destroy() { }
    public string[] GetModulePaths() => new[] { "C:/my-mod" };  // ✗ 会把整个模块搜索目录劫持成 mod 目录
    public void SetLauncherMode(bool isLauncherModeActive) { }
    public bool CheckEntitlement(string title) => true;          // ✗ 会绕过平台授权
}
```

## 参见

- [`../ModuleHelper`](../ModuleHelper) —— 模块系统唯一的正常入口；`InitializePlatformModuleExtension` / `ClearPlatformModuleExtension` 这类**属于启动器流程、不该由 mod 调用**的方法就是装配本接口实现的地方。
- [`../ModuleInfo`](../ModuleInfo) —— 单个模块的完整运行时描述。平台层通过 `GetModulePaths()` 给出候选目录后，模块系统据此构建出这些 `ModuleInfo`。
- [`../_index`](../_index) —— `TaleWorlds.ModuleManager` 桶的全类型索引。

## 导航

- 同桶：[`../_index`](../_index)
- 父索引：[`modulemanager`](../_index)
