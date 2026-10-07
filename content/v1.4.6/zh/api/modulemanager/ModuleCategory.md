---
title: "ModuleCategory"
description: "模块的联机形态分类枚举：单人、多人、多人可选、服务器四种取值。"
---
# ModuleCategory

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public enum ModuleCategory`
**Source:** `TaleWorlds.ModuleManager/ModuleCategory.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ModuleCategory` 只有 **4 个取值**，一共 17 行：

| 取值 | 含义 |
| --- | --- |
| `Singleplayer` | 单人模式模块 |
| `Multiplayer` | 多人模式模块 |
| `MultiplayerOptional` | 多人模式的**可选**模块（缺失也能进多人） |
| `Server` | 服务器侧模块 |

它是 `SubModule.xml` 里 `<ModuleCategory>` 声明在内存中的枚举形态，用于回答一个问题：**这个模块属于哪种联机形态？**

## 心智模型

这是**联机形态（runtime form）**分类，**不是玩法分类**。

```
Singleplayer ───────────────┐
                            ├─▶ 单人客户端会考虑哪些模块
Multiplayer ────────────────┤
MultiplayerOptional ────────┤   ← 关键区别：缺了不致命
Server ─────────────────────┴─▶ 专用服务器会考虑哪些模块
```

三条心智规则：

1. **它不区分"沙盒 / 战役 / 故事模式"。** 想知道那是沙盒还是故事模式，看**模块 Id**（例如 `SandBox` / `StoryMode` / `CustomBattle`），不是看这个枚举。枚举里根本没有这类取值。
2. **`MultiplayerOptional` 的重点是 "Optional"。** 它和 `Multiplayer` 同属多人侧，但语义是"多人环境下可有可无"，用于让同一份多人配置能容纳不同的内容包。
3. **它是一个"筛选标签"，不是"加载顺序"。** 它决定某模块在某个运行形态下**是否被考虑**，不决定谁先加载 —— 顺序由依赖（见 `DependedModule`）等机制决定。

> 值类型提示：`ModuleCategory` 是 `enum`，其底层是整数。`ModuleCategory.Singleplayer == 0` 是第一个取值，所以**默认值（`default(ModuleCategory)`）就是 `Singleplayer`**。序列化/反序列化时如果没有显式赋值，会静默落成 `Singleplayer` 而不是报错。

## 怎么用

### 怎么拿到

不要硬编码字符串去猜。真实值来自模块描述：

```csharp
ModuleInfo info = ModuleHelper.GetModuleInfo("Native");
ModuleCategory category = info.Category;
```

只有**为测试构造假数据**或做**筛选条件**时才直接写枚举字面量：

```csharp
ModuleCategory filter = ModuleCategory.Singleplayer;
```

### 典型用法

**筛选出当前运行形态该看的模块：**

```csharp
bool IsForSingleplayer(ModuleCategory c) =>
    c == ModuleCategory.Singleplayer;

bool IsForMultiplayer(ModuleCategory c) =>
    c == ModuleCategory.Multiplayer || c == ModuleCategory.MultiplayerOptional;

bool IsServerSide(ModuleCategory c) =>
    c == ModuleCategory.Server;
```

**用 `switch` 明确处理全部四种形态（推荐写成 exhaustive，方便以后编译器提示新增取值）：**

```csharp
string Describe(ModuleCategory c)
{
    switch (c)
    {
        case ModuleCategory.Singleplayer:       return "单人";
        case ModuleCategory.Multiplayer:        return "多人（必需）";
        case ModuleCategory.MultiplayerOptional:return "多人（可选）";
        case ModuleCategory.Server:             return "服务器";
        default:                                return "未知";
    }
}
```

### 坑

- **别拿它当玩法分类。** "这个模块是沙盒还是故事？" 它答不了 —— 看 `ModuleId`。
- **`Multiplayer` ≠ `MultiplayerOptional`。** 写判断时只检查 `== ModuleCategory.Multiplayer` 会漏掉所有 `MultiplayerOptional` 模块；想"所有多人相关"就必须两个都判（或写 `c is Multiplayer or MultiplayerOptional`）。
- **`default(ModuleCategory)` 是 `Singleplayer`。** 任何"忘记赋值"的地方都会静默变成单人分类，排查问题时先怀疑这里。
- **不要把枚举名当字符串用。** 模块描述里的字面量（如 `"Singleplayer"`）与枚举的绑定由模块系统解析完成；自己 `Enum.Parse` 拼字符串容易在大小写或拼写上翻车，优先走 `ModuleInfo.Category`。
- **只有 4 个取值，没有 "Any"/"None"。** 想表达"不限形态"只能靠**不筛选**，不要试图找一个万能取值。

## 关键成员

| 成员 | 说明 |
| --- | --- |
| `Singleplayer` | 单人模式模块。单人客户端加载流程会考虑这类模块。 |
| `Multiplayer` | 多人模式**必需**模块。多人环境下缺了就不满足。 |
| `MultiplayerOptional` | 多人模式**可选**模块。属多人侧，但缺失只降级不致命 —— 这是它与 `Multiplayer` 的唯一区别。 |
| `Server` | 服务器侧模块，供专用服务器运行形态使用。 |

> 该类型没有方法、没有属性、没有扩展点：它只是一个 4 值的标签。

## 真实示例

**示例 1：把某个模块按形态归类成"单人可玩 / 多人可玩 / 仅服务器"**

```csharp
using TaleWorlds.ModuleManager;

public static string RuntimeForm(ModuleCategory category)
{
    switch (category)
    {
        case ModuleCategory.Singleplayer:
            return "singleplayer-only";
        case ModuleCategory.Multiplayer:
            return "multiplayer-required";
        case ModuleCategory.MultiplayerOptional:
            return "multiplayer-optional";
        case ModuleCategory.Server:
            return "server-only";
        default:
            return "unknown";
    }
}
```

**示例 2：在一份模块清单里挑出"当前形态该加载的模块"**

```csharp
using System.Collections.Generic;
using System.Linq;
using TaleWorlds.ModuleManager;

// 单人形态：只看 Singleplayer
List<ModuleInfo> spModules = allModules
    .Where(m => m.Category == ModuleCategory.Singleplayer)
    .ToList();

// 多人形态：Multiplayer 与 MultiplayerOptional 都要（关键：别漏掉 Optional）
List<ModuleInfo> mpModules = allModules
    .Where(m => m.Category == ModuleCategory.Multiplayer
             || m.Category == ModuleCategory.MultiplayerOptional)
    .ToList();

// 服务器形态
List<ModuleInfo> serverModules = allModules
    .Where(m => m.Category == ModuleCategory.Server)
    .ToList();
```

**示例 3：常见的错误写法与修正**

```csharp
// ✗ 错误：漏掉 MultiplayerOptional
bool wrong = m.Category == ModuleCategory.Multiplayer;

// ✓ 正确：所有多人相关
bool right = m.Category == ModuleCategory.Multiplayer
          || m.Category == ModuleCategory.MultiplayerOptional;

// ✗ 错误：以为枚举能告诉你"这是不是沙盒战役"
//    —— ModuleCategory 里没有这种取值，得看 m.Id

// ✓ 正确：玩法归类靠 Id
bool isSandboxLike = m.Id.StartsWith("SandBox");
```

## 参见

- [`../ModuleInfo`](../ModuleInfo) —— `Category` 属性的宿主类型，也是 `ModuleCategory` 最常见的来源（`ModuleInfo.Category`）；同页还有一个布尔快捷形式 `HasMultiplayerCategory`。
- [`../ModuleHelper`](../ModuleHelper) —— 按模块 Id 拿到 `ModuleInfo` 的地方；要按形态筛选模块，先从这里取数据再判 `Category`。
- [`../_index`](../_index) —— `TaleWorlds.ModuleManager` 桶的全类型索引。

## 导航

- 同桶：[`../_index`](../_index)
- 父索引：[`modulemanager`](../_index)
