---
title: "RandomEquipmentEffect"
description: "联机出生装备的随机化 perk：从 XML 的 <Group> 里读出若干套备选装备，按 EffectTarget 筛玩家/AI/全部，然后要么合并全部、要么随机取一套。空组会被静默丢弃。"
---

# RandomEquipmentEffect

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RandomEquipmentEffect : MPRandomOnSpawnPerkEffect`
**Base:** `MPRandomOnSpawnPerkEffect`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects/RandomEquipmentEffect.cs`

## 概述

全文 107 行，回答一个问题：**联机对战里，一个单位出生时穿哪套装备。** 它从 XML 里读出若干「装备组」，然后按目标（玩家 / AI / 全部）筛选，按需合并或随机取一组。

三个成员撑起全类：

- 类型标签 `StringType`（`RandomEquipmentEffect.cs:11`），值是 `"RandomEquipmentOnSpawn"`。
- 装备组容器 `_groups`（`RandomEquipmentEffect.cs:13`），类型是 `MBList<List<(EquipmentIndex, EquipmentElement)>>`——**外层是组，内层是一套「槽位 → 物品」的完整装备。**
- 唯一的公开方法 `GetAlternativeEquipments`（`RandomEquipmentEffect.cs:63`）。

解析在 `Deserialize`（`RandomEquipmentEffect.cs:19`），构造是 **protected**（`RandomEquipmentEffect.cs:15`）——**外部不能 new，只能由框架从 XML 反序列化出来。**

## 心智模型

把它当成**「出生装备的抽签箱」**，而不是「装备生成器」。四条推论：

第一，**它不生成装备，只从你给的组里挑。** 所有物品都必须在 XML 里写死成 `<item id=.../>`，由 `MBObjectManager.Instance.GetObject<ItemObject>(...)`（`RandomEquipmentEffect.cs:45`）解析出来。它**不会**按兵种自动配装，**不会**按等级缩放，**不会**保证武器可用。**组里只有弓，出来的兵就只会拿弓。**

第二，**「全部」与「随机」是两种互斥的取法，由 `getAll` 决定。** `getAll` 为真时循环遍历所有匹配的组并 `AddRange` 累积（`RandomEquipmentEffect.cs:89`）；为假时只 `Extensions.GetRandomElement` 取**一组**（`RandomEquipmentEffect.cs:98` 与 `:102`）。**前者返回「并集」，后者返回「单套」。** 两者返回值的语义完全不同，调用方必须自己清楚要哪个。

第三，**入参为 null 时才新建 list，否则是往你的 list 里塞。** 判空在 `RandomEquipmentEffect.cs:83`（getAll 分支）与 `RandomEquipmentEffect.cs:96`（随机分支），`AddRange` 在 `:89` 与 `:102`。**传进去一个已有内容的 list，返回值里就混着你原有的东西。** 这是最容易踩的一条——它不是纯函数。

第四，**空组被静默丢弃。** `RandomEquipmentEffect.cs:56` 判 `list.Count > 0` 才把这一组加进 `_groups`。所以 XML 里写了一个空的 `<Group/>`，或里面只有注释与空白节点，**它就当这组不存在，不报错**。你会在 `getAll` 结果里少掉它，却找不到原因。

还有两条边界：`StringType` 是 `static` 而**不是 `const`**（`RandomEquipmentEffect.cs:11`），所以它是运行期可改的；而槽位名走的是 `Equipment.GetEquipmentIndexFromOldEquipmentIndexName`（`RandomEquipmentEffect.cs:51`）——**旧版槽位命名法的映射表**，这意味着 XML 里的 `slot` 值用的是旧命名，不是 `EquipmentIndex` 枚举名。

## 如何使用

**拿法：** 不能 `new`（构造函数是 protected，`RandomEquipmentEffect.cs:15`）。它由 perk 框架从 XML 反序列化出来，你的代码只负责**消费** `GetAlternativeEquipments`：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static List<(EquipmentIndex, EquipmentElement)> RollSpawnEquipment(
    RandomEquipmentEffect effect,
    bool isPlayer,
    bool wantAllGroups)
{
    // 声明在 RandomEquipmentEffect.cs:63
    // ⚠ 第三个形参传 null 时它会新建 list；
    //    传已有 list 时它是往里 AddRange（:89 / :102），不是纯函数。
    return effect.GetAlternativeEquipments(isPlayer, null, wantAllGroups);
}
```

谨慎使用「追加」形态（看清它会改你的 list）：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static void AppendSpawnEquipment(
    RandomEquipmentEffect effect,
    bool isPlayer,
    List<(EquipmentIndex, EquipmentElement)> target)
{
    // ⚠ 这里传的是已有 list —— RandomEquipmentEffect.cs:83 判它非 null，
    //    于是走 :89 / :102 的 AddRange 分支，target 会被就地修改。
    effect.GetAlternativeEquipments(isPlayer, target, getAll: true);

    Debug.Print("target now has " + target.Count + " entries", 0);
}
```

诊断「我 XML 里写了一组装备却没生效」（逐条对照解析的丢弃条件）：

```csharp
using System.Xml;

public static string DiagnoseGroup(System.Xml.XmlNode groupNode)
{
    int usable = 0;

    foreach (XmlNode child in groupNode.ChildNodes)
    {
        // 注释与空白被跳过，见 RandomEquipmentEffect.cs:38
        if (child.NodeType == XmlNodeType.Comment
            || child.NodeType == XmlNodeType.SignificantWhitespace)
        {
            continue;
        }

        // item 与 slot 属性都是可选的：RandomEquipmentEffect.cs:43 与 :49
        // 缺 item 时 EquipmentElement 保持 default，缺 slot 时索引是 -1
        if (child.Attributes?["item"] == null)
        {
            return "组里有一项没有 item 属性 —— 它会进 list 但装备是空的";
        }

        usable++;
    }

    // usable == 0 时，RandomEquipmentEffect.cs:56 会把整组静默丢弃
    return usable == 0
        ? "空组：会被 RandomEquipmentEffect.cs:56 丢弃，且不报错"
        : "可用项 " + usable;
}
```

理解 `EffectTarget` 的三值语义（判定式在 `RandomEquipmentEffect.cs:81` 与 `:94`）：

```csharp
// int effectTarget，三种取值：
//   0 -> 只对玩家生效   （RandomEquipmentEffect.cs:81 的 isPlayer ? == 0）
//   1 -> 只对 AI 生效    （:81 的 : 1）
//   2 -> 两侧都生效      （:81 的 == 2 短路）
// 因此 isPlayer=true 时只需 target==0 或 target==2；
// isPlayer=false 时只需 target==1 或 target==2。
public static bool TargetMatches(int effectTarget, bool isPlayer)
{
    if (effectTarget == 2)
    {
        return true;               // RandomEquipmentEffect.cs:81 / :94 的第一个条件
    }

    return isPlayer ? effectTarget == 0 : effectTarget == 1;
}
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public class RandomEquipmentEffect : MPRandomOnSpawnPerkEffect`（`RandomEquipmentEffect.cs:9`） | 非抽象。命名空间 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects`（`RandomEquipmentEffect.cs:7`）——**四层深，专属 perk 效果目录**。 |
| `StringType` | `protected static string StringType = "RandomEquipmentOnSpawn"`（`RandomEquipmentEffect.cs:11`） | **`static` 不是 `const`**，运行期可改。框架靠它识别 XML 里的效果类型名。 |
| `_groups` | `private MBList<List<(EquipmentIndex, EquipmentElement)>> _groups`（`RandomEquipmentEffect.cs:13`） | **唯一的字段**，在 `RandomEquipmentEffect.cs:28` new 出来。外层每项是一套完整装备，内层每项是「槽位 → 物品」。 |
| 构造函数 | `protected RandomEquipmentEffect()`（`RandomEquipmentEffect.cs:15`） | **protected 且空**（`:16` 到 `:17`）。**外部不能 new** —— 只能由框架从 XML 反序列化。 |
| `Deserialize` | `protected override void Deserialize(XmlNode node)`（`RandomEquipmentEffect.cs:19`） | 解析主方法。先转调基类（`RandomEquipmentEffect.cs:27`），再遍历子节点，只处理名为 `Group` 的（`RandomEquipmentEffect.cs:31`），跳过注释与空白。每项读 `item`（`:42`）与 `slot`（`:48`）两个属性。 |
| `GetAlternativeEquipments` | `public override List<(EquipmentIndex, EquipmentElement)> GetAlternativeEquipments(bool isPlayer, List<(EquipmentIndex, EquipmentElement)> alternativeEquipments, bool getAll)`（`RandomEquipmentEffect.cs:63`） | **全类唯一的公开入口。** `getAll` 为真走合并分支（`:77` 到 `:93`），否则走随机分支（`:94` 到 `:104`）。**两个分支都判 `EffectTarget`（`:81` 与 `:94`），不匹配时原样返回入参。** |

解析过程中的五个丢弃/默认值条件：

| 条件 | 行 | 后果 |
| --- | --- | --- |
| 注释与空白节点 | `RandomEquipmentEffect.cs:31` | 跳过 |
| 注释与空白节点（内层） | `RandomEquipmentEffect.cs:38` | 跳过 |
| 缺 `item` 属性 | `RandomEquipmentEffect.cs:43` | 物品保持 `default` |
| 缺 `slot` 属性 | `RandomEquipmentEffect.cs:49` | 索引落成 `-1` |
| 组内可用项为 0 | `RandomEquipmentEffect.cs:56` | **整组静默丢弃** |

## 真实示例

复刻 `getAll` 分支的合并语义（看清「不匹配时原样返回」）：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;

// 复刻 RandomEquipmentEffect.cs:77 到 :93
public static List<(EquipmentIndex, EquipmentElement)> CollectAll(
    IList<List<(EquipmentIndex, EquipmentElement)>> groups,
    int effectTarget,
    bool isPlayer,
    List<(EquipmentIndex, EquipmentElement)> alternativeEquipments)
{
    // RandomEquipmentEffect.cs:77 的分支
    if (true)   // 此处代表 getAll == true
    {
        foreach (var group in groups)
        {
            // RandomEquipmentEffect.cs:81 的判定式
            bool matches = effectTarget == 2
                        || (isPlayer ? effectTarget == 0 : effectTarget == 1);

            if (!matches)
            {
                continue;   // 不匹配的组被跳过，不是 return
            }

            if (alternativeEquipments == null)
            {
                // RandomEquipmentEffect.cs:85 —— 新建一份拷贝
                alternativeEquipments = new List<(EquipmentIndex, EquipmentElement)>(group);
            }
            else
            {
                // RandomEquipmentEffect.cs:89 —— 就地追加
                alternativeEquipments.AddRange(group);
            }
        }
    }

    return alternativeEquipments;
}
```

复刻随机分支（看清 `getAll=false` 只取一组）：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.Library;

// 复刻 RandomEquipmentEffect.cs:94 到 :105
public static List<(EquipmentIndex, EquipmentElement)> RollOneGroup(
    MBList<List<(EquipmentIndex, EquipmentElement)>> groups,
    int effectTarget,
    bool isPlayer,
    List<(EquipmentIndex, EquipmentElement)> alternativeEquipments)
{
    bool matches = effectTarget == 2
                || (isPlayer ? effectTarget == 0 : effectTarget == 1);

    if (matches)
    {
        if (alternativeEquipments == null)
        {
            // RandomEquipmentEffect.cs:98 —— 随机取一整组，直接当返回值
            alternativeEquipments = new List<(EquipmentIndex, EquipmentElement)>(
                Extensions.GetRandomElement<List<(EquipmentIndex, EquipmentElement)>>(groups));
        }
        else
        {
            // RandomEquipmentEffect.cs:102 —— 随机取一组后追加
            alternativeEquipments.AddRange(
                Extensions.GetRandomElement<List<(EquipmentIndex, EquipmentElement)>>(groups));
        }
    }

    // RandomEquipmentEffect.cs:105 —— 不匹配时原样返回入参（可能是 null）
    return alternativeEquipments;
}
```

复刻 XML 解析里的「静默丢弃」（这是本页最该记住的行为）：

```csharp
using System.Collections.Generic;
using System.Xml;
using TaleWorlds.Core;

// 复刻 RandomEquipmentEffect.cs:29 到 :60 的骨架（省略物品解析）
public static List<List<(EquipmentIndex, EquipmentElement)>> ParseGroups(
    XmlNode node, out int droppedEmptyGroups)
{
    var groups = new List<List<(EquipmentIndex, EquipmentElement)>>();
    droppedEmptyGroups = 0;

    foreach (XmlNode groupNode in node.ChildNodes)
    {
        // RandomEquipmentEffect.cs:31 —— 只认 Group，注释与空白直接跳过
        if (groupNode.NodeType == XmlNodeType.Comment
            || groupNode.NodeType == XmlNodeType.SignificantWhitespace
            || groupNode.Name != "Group")
        {
            continue;
        }

        var list = new List<(EquipmentIndex, EquipmentElement)>();

        foreach (XmlNode itemNode in groupNode.ChildNodes)
        {
            // RandomEquipmentEffect.cs:38
            if (itemNode.NodeType == XmlNodeType.Comment
                || itemNode.NodeType == XmlNodeType.SignificantWhitespace)
            {
                continue;
            }
            list.Add(default);
        }

        // RandomEquipmentEffect.cs:56 —— 空组被静默丢弃，只能靠计数器事后发现
        if (list.Count > 0)
        {
            groups.Add(list);
        }
        else
        {
            droppedEmptyGroups++;
        }
    }

    return groups;
}
```

## 风险与边界

- **`GetAlternativeEquipments` 不是纯函数。** 入参非 null 时它 `AddRange` 改你的 list（`RandomEquipmentEffect.cs:89` 与 `:102`）。**要纯结果就传 null。**
- **`getAll` 决定「并集」还是「单套」。** 语义完全不同（`:89` vs `:98`）。
- **空组静默丢弃**（`RandomEquipmentEffect.cs:56`）。不报错、不警告，`getAll` 结果里就是少一组。
- **构造函数是 protected**（`RandomEquipmentEffect.cs:15`）。**不能 new，只能从 XML 出来。**
- **`StringType` 是 static 不是 const**（`RandomEquipmentEffect.cs:11`）。运行期可改，且是 `protected` —— 派生类能碰。
- **`slot` 走旧命名映射**（`RandomEquipmentEffect.cs:51`）。写 `EquipmentIndex` 枚举名可能映射不到，落成 `-1`。
- **缺 `item` 不报错**（`RandomEquipmentEffect.cs:43`）。装备保持 `default` 并被加进组里 —— **组非空所以不会被丢弃，但结果是空装备。**
- **缺 `slot` 落成 `-1`**（`RandomEquipmentEffect.cs:41`）。负数索引进装备表。
- **`EffectTarget` 不匹配时原样返回入参**（`RandomEquipmentEffect.cs:105`）。入参是 null 就返回 null —— **调用方不做判空会 NRE。**
- **`Deserialize` 不校验 group 名字以外的任何东西。** 拼错 `<Group>` 成 `<group>` 会被 `RandomEquipmentEffect.cs:31` 的判断跳过，结果是零组。
- **CustomBattle 与 Multiplayer 各有一份同名文件**，改一份不影响另一份。

## 依赖关系

- 本类：`RandomEquipmentEffect.cs:9` 类头、`:11` 类型标签、`:13` 组容器、`:15` protected 构造、`:19` XML 解析、`:63` 唯一公开入口（这一句指的都是同一个文件）
- 基类链：[MPRandomOnSpawnPerkEffect](../MPRandomOnSpawnPerkEffect/) → [MPOnSpawnPerkEffectBase](../MPOnSpawnPerkEffectBase/) → [MPPerkEffectBase](../MPPerkEffectBase/)
- 同族效果（形状相近，勿重复成页）：[AlternativeEquipmentEffect](../AlternativeEquipmentEffect/)（同在 perk 效果目录）；判定侧的对照页是 [MPCombatPerkEffect](../MPCombatPerkEffect/)
- 数据类型：[EquipmentIndex](../../core-extra/EquipmentIndex/)、[EquipmentElement](../../core-extra/EquipmentElement/)、[Equipment](../../core-extra/Equipment/)、[ItemModifier](../../core-extra/ItemModifier/)、[MBList](../../core-extra/MBList/)
- 物品解析：[MBObjectManager](../../campaign-ext/MBObjectManager/) 的 `Instance.GetObject<ItemObject>`；[ItemObject](../../core-extra/ItemObject/)
- 随机选取：`TaleWorlds.Library` 的 `Extensions.GetRandomElement`（[Extensions](../../core-extra/Extensions/)）
- 桶首页：[mission-ext API 分区](../)