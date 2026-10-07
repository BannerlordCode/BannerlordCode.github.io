---
title: "ModuleType"
description: "模块来源与认证分类枚举：Community / Official / OfficialOptional 三个取值，是 ModuleInfo.IsOfficial 与 IsRequiredOfficial 的计算依据。"
---
# ModuleType

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public enum ModuleType`
**Source:** `TaleWorlds.ModuleManager/ModuleType.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ModuleType` 只有 **3 个取值**，整个文件 15 行（`ModuleType.cs:6` 声明）：

| 取值 | 声明行 | 含义 |
| --- | --- | --- |
| `Community` | `ModuleType.cs:9` | 社区模块（`IsOfficial` 与 `IsRequiredOfficial` 均为假）。 |
| `Official` | `ModuleType.cs:11` | 官方必需模块（`IsOfficial` 与 `IsRequiredOfficial` 均为真）。 |
| `OfficialOptional` | `ModuleType.cs:13` | 官方可选模块（`IsOfficial` 为真，`IsRequiredOfficial` 为假）。 |

它回答的问题是：**这个模块是谁发的、官方身份有多硬？** —— 是「来源 / 认证」分类，不是「主模块 vs 平台扩展」分类，也不是联机形态分类（那是 `ModuleCategory`，见下）。

三个取值没有显式赋整数值，按 C# 规则从 0 起：`Community = 0`、`Official = 1`、`OfficialOptional = 2`。**`default(ModuleType)` 就是 `Community`**。

它在运行时的唯一宿主是 `ModuleInfo.Type`：`SubModule.xml` 里的 `<ModuleType>` 节点由 `Enum.TryParse<ModuleType>` 解析后写入（`ModuleInfo.cs:141-144`）。

## 心智模型

把三个值想成**认证阶梯**，不是并列标签：

```
Community(0) ── Official(1) ── OfficialOptional(2)
   │                │                  │
   │                │                  └─ 官方身份，但「可选」——IsRequiredOfficial 不为真
   │                └─ 官方必需：IsOfficial 与 IsRequiredOfficial 都为真
   └─ 社区/第三方：两个官方属性都为假
```

两条已核实的消费规则（都在 `ModuleInfo` 里）：

1. **`IsOfficial` = `Type > ModuleType.Community`**（`ModuleInfo.cs:33`）—— 只要不是社区模块就算「官方」，所以 `Official` 和 `OfficialOptional` **都**让 `IsOfficial` 为真。
2. **`IsRequiredOfficial` = `Type == ModuleType.Official`**（`ModuleInfo.cs:48`）—— 只有恰好 `Official` 才算「官方必需」，`OfficialOptional` 不算。

三条心智规则：

- **它是「身份标签」，不是「行为」。** 枚举本身没有任何方法，全部语义在消费方（`ModuleInfo` 的两个只读属性）。
- **`OfficialOptional` 是官方，但不是必需。** 写判断时把 `IsOfficial` 当「官方必需」用会出错——必需性要看 `IsRequiredOfficial`。
- **它和 `ModuleCategory` 是两个正交的轴。** `ModuleType` 问「谁发的」，`ModuleCategory` 问「什么联机形态」。一个模块同时有两者，互不替代。

## 怎么用

### 怎么拿到

不要硬编码字符串。真实值来自模块描述：

```csharp
ModuleInfo info = ModuleHelper.GetModuleInfo("Native");
ModuleType type = info.Type;
```

只有**为测试构造假数据**或写**筛选条件**时才直接写枚举字面量：

```csharp
ModuleType filter = ModuleType.Community;
```

### 典型用法

**判断「是不是官方模块」（注意 Optional 也算官方）：**

```csharp
bool IsOfficialLike(ModuleInfo m) => m.Type > ModuleType.Community;
// 等价于 m.IsOfficial；显式比较在需要「官方且非 Optional」时更灵活
```

**区分「官方必需」与「官方可选」：**

```csharp
if (info.Type == ModuleType.Official)             { /* 官方必需内容 */ }
else if (info.Type == ModuleType.OfficialOptional) { /* 官方可选内容 */ }
else                                                { /* 社区模块 */ }
```

**用 `switch` 穷尽处理（推荐，新增取值时编译器会提示）：**

```csharp
string Describe(ModuleType t)
{
    switch (t)
    {
        case ModuleType.Community:         return "社区模块";
        case ModuleType.Official:         return "官方必需";
        case ModuleType.OfficialOptional: return "官方可选";
        default:                           return "未知";
    }
}
```

### 坑

- **`default(ModuleType)` 是 `Community`。** 任何「忘记赋值」的地方都会静默变成社区模块；`Enum.TryParse` 失败时 `ModuleInfo.Type` 保持默认值，排查「模块怎么变社区了」时先怀疑这里。
- **`IsOfficial` ≠ `IsRequiredOfficial`。** 前者含 `OfficialOptional`，后者不含。想表达「官方必需」必须用 `== ModuleType.Official` 或 `IsRequiredOfficial`。
- **别拿它当联机形态分类。** 「单人还是多人」看 `ModuleCategory`；「沙盒还是故事」看模块 `Id`。`ModuleType` 里没有这类取值。
- **不要把枚举名当字符串拼。** `SubModule.xml` 里的字面量（如 `"Official"`）与枚举的绑定由模块系统用 `Enum.TryParse` 完成（`ModuleInfo.cs:141-144`）；自己 `Enum.Parse` 拼字符串容易在大小写上翻车。
- **只有 3 个取值，没有 "Any"/"None"。** 想表达「不限来源」只能靠**不筛选**。

## 关键成员

| 成员 | 说明 |
| --- | --- |
| `Community` | 社区模块。`ModuleInfo.IsOfficial` 为假，`IsRequiredOfficial` 为假。 |
| `Official` | 官方必需模块。`IsOfficial` 与 `IsRequiredOfficial` 均为真。 |
| `OfficialOptional` | 官方可选模块。`IsOfficial` 为真，`IsRequiredOfficial` 为假。 |

消费它的两个只读属性（定义在 `ModuleInfo`）：

| 成员 | 定义 | 作用 |
| --- | --- | --- |
| `bool IsOfficial` | `ModuleInfo.cs:33` | `Type > ModuleType.Community` —— 官方身份（含 Optional）。 |
| `bool IsRequiredOfficial` | `ModuleInfo.cs:48` | `Type == ModuleType.Official` —— 官方必需身份（不含 Optional）。 |

> 该枚举没有方法、没有属性、没有扩展点：它只是一个 3 值的标签。

## 真实示例

**示例 1：把模块按来源分成「社区 / 官方必需 / 官方可选」三档**

```csharp
using TaleWorlds.ModuleManager;

public static string Origin(ModuleType type)
{
    switch (type)
    {
        case ModuleType.Community:         return "community";
        case ModuleType.Official:         return "official-required";
        case ModuleType.OfficialOptional: return "official-optional";
        default:                           return "unknown";
    }
}
```

**示例 2：在一份模块清单里挑出「官方必需」模块（启动器排序场景）**

```csharp
using System.Collections.Generic;
using System.Linq;
using TaleWorlds.ModuleManager;

public static List<ModuleInfo> GetRequiredOfficial(List<ModuleInfo> all)
{
    // 关键：用 == Official 而不是 IsOfficial —— 后者会混进 OfficialOptional
    return all.Where(m => m.Type == ModuleType.Official).ToList();
}
```

**示例 3：常见的错误写法与修正**

```csharp
// ✗ 错误：以为 IsOfficial 就是「官方必需」，把 Optional 当成了非官方
bool wrong = !info.IsOfficial;                    // Optional 模块在这里被误判

// ✓ 正确：要「官方必需」就显式比 Official
bool right = info.Type == ModuleType.Official;

// ✗ 错误：拿 ModuleType 当联机形态用
//    —— 它没有 Singleplayer/Multiplayer 这类取值，那是 ModuleCategory

// ✓ 正确：联机形态看 Category
bool isMp = info.Category == ModuleCategory.Multiplayer
         || info.Category == ModuleCategory.MultiplayerOptional;
```

## 参见

- [`../ModuleInfo`](../ModuleInfo) —— `Type` 属性的宿主类型；`IsOfficial` / `IsRequiredOfficial` 都在它那里消费本枚举。
- [`../ModuleCategory`](../ModuleCategory) —— 联机形态分类枚举，与本枚举正交的另一个轴。
- [`../IPlatformModuleExtension`](../IPlatformModuleExtension) —— 平台扩展模块接口；「平台扩展」是另一个概念，不由本枚举区分。
- [`../_index`](../_index) —— `TaleWorlds.ModuleManager` 桶的全类型索引。

## 导航

- 同桶：[`../ModuleInfo`](../ModuleInfo)
- 同桶：[`../ModuleCategory`](../ModuleCategory)
- 同桶：[`../_index`](../_index)
- 父索引：[`modulemanager`](../_index)
