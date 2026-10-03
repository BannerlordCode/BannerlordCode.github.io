---
title: "MultiplayerCultureColorInfo"
description: "多人对战单侧色板：MultiplayerBattleColors 的嵌套只读结构体，14 个 readonly 字段（7 组 Color + ColorUint），构造器一次性从 BasicCultureObject 抄好，culture 为 null 时全部落成 0；ClothingColor1/2 在 1.3.0 里与 Color1/2 表达式完全相同。"
---

# MultiplayerCultureColorInfo

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Multiplayer`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public readonly struct MultiplayerCultureColorInfo`（**嵌套在** `MultiplayerBattleColors` 内部）
**Base:** 无（值类型，仅隐式 `System.Object`；**不**继承 `MultiplayerBattleColors`，两者是并列的独立值类型）
**File:** `TaleWorlds.MountAndBlade/Missions/Multiplayer/MultiplayerBattleColors.cs`（嵌套部分约 50 行 / 整个文件 150 行 / 6.1 KB）

## 概述

`MultiplayerCultureColorInfo` 是「一支队伍的颜色包」。它**没有方法、没有属性**，只有一个构造器和 14 个 `public readonly` 字段——7 个 `Color`（`TaleWorlds.Library.Color` 的结构体）配 7 个 `uint` 原始值：`Color1` / `Color1Uint`、`Color2` / `Color2Uint`、`ClothingColor1` / `ClothingColor1Uint`、`ClothingColor2` / `ClothingColor2Uint`、`BannerBackgroundColor` / `BannerBackgroundColorUint`、`BannerForegroundColor` / `BannerForegroundColorUint`，外加 `Culture`（原始的 [BasicCultureObject](../../core-extra/BasicCultureObject) 引用）。

它**不是顶层类型**。源码里的声明是 `public readonly struct MultiplayerCultureColorInfo`，嵌在外层 `public readonly struct MultiplayerBattleColors` 之内（Token 0x0200068C），所以引用时必须写全限定名：

```csharp
MultiplayerBattleColors.MultiplayerCultureColorInfo info = colors.GetPeerColors(peer);
```

外层类型有两个实例字段 `AttackerColors` / `DefenderColors`，类型都是本结构体；[MultiplayerBattleColors](../MultiplayerBattleColors) 的 `CreateWith(BasicCultureObject, BasicCultureObject)` 工厂与 `GetPeerColors(MissionPeer)` 方法返回的也都是本类型。想直接 `new` 也可以——构造器是 public。

## 心智模型

把它当成**「一份不可变的、已经把 uint 解码好的调色板快照」**。它不含任何计算：所有 `?:` 条件表达式都在构造器里跑完，之后 14 个字段就是死数据。

**第一层：`swapColors` 是一次 1↔2 对调。** 构造器里每一项都是 `swapColors ? 文化的 2 号色 : 文化的 1 号色` 这个形状。注意**主体色与旗帜色取的不是同一组属性**：主体/衣物用 `Color` / `Color2`，旗帜用 `BackgroundColor1` / `BackgroundColor2` 与 `ForegroundColor1` / `ForegroundColor2`。

**第二层：null 一律落成 0，不抛异常。** 构造器里的表达式形如 `((swapColors ? (culture != null ? new uint?(culture.Color2) : null) : (culture != null ? new uint?(culture.Color) : null)) ?? 0U)`。`culture` 为 null 时三元给出 null，`?? 0U` 兜成 `0U`，然后 `Color.FromUint(0)` 得到 r=g=b=a=0 的完全透明。**没有任何一处会报错或断言**——传 null 进去你会得到一套全 0 的颜色。

**第三层：`ClothingColor*` 与 `Color*` 在当前实现里完全同源。** 对比构造器的两行：`Color1` 和 `ClothingColor1` 都展开成 `swapColors ? culture.Color2 : culture.Color`；`Color2` 和 `ClothingColor2` 都展开成 `swapColors ? culture.Color : culture.Color2`。它们各自留了 uint 副本，**但没有任何独立取值来源**。所以「主体一套配色、衣物另一套」这个直觉在 1.3.0 是不成立的。

**第四层：`Color` 与 `uint` 是同一份数据的两种视图。** 每个 `XxxColor` 都是 `Color.FromUint(this.XxxUint = ...)` 的结果——先赋 uint 字段，再把同一个 uint 解码成 Color。`Color.FromUint` 的位运算决定了 `uint` 的字节序：

```csharp
float alpha = (float)(byte)(color >> 24) * 0.003921569f;
float red   = (float)(byte)(color >> 16) * 0.003921569f;
float green = (float)(byte)(color >> 8)  * 0.003921569f;
float blue  = (float)(byte)(color)       * 0.003921569f;
```

**最高字节是 alpha**，`0xAABBGGRR`，不是 `0xRRGGBB`。需要原始值（比如要送进 `AgentBuildData.ClothingColor1(uint)`）就用对应的 `Uint` 字段。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造器 | `public MultiplayerCultureColorInfo(BasicCultureObject culture, bool swapColors)` | 唯一入口。14 个字段全在这里一次算完：先存 `Culture`，再逐项 `XxxColor = Color.FromUint(this.XxxUint = … ?? 0U)`。**不做校验、不做断言**，`culture` 可为 null。 |
| `Culture` | `public readonly BasicCultureObject Culture` | 原文化引用。**构造器原样赋值，可能是 null**——`GetPeerColors` 里「两方文化引用是否相同」的判定就靠它。 |
| `Color1` / `Color1Uint` | `public readonly Color Color1` / `public readonly uint Color1Uint` | 主体第一色。`swapColors` → `culture.Color2`，否则 `culture.Color`。 |
| `Color2` / `Color2Uint` | `public readonly Color Color2` / `public readonly uint Color2Uint` | 主体第二色。永远是 `Color1` 表达式里 `Color`/`Color2` 对调后的结果。 |
| `ClothingColor1` / `ClothingColor1Uint` | `public readonly Color ClothingColor1` / `public readonly uint ClothingColor1Uint` | 衣物第一色。**表达式与 `Color1` 完全相同，1.3.0 里两者恒等。** |
| `ClothingColor2` / `ClothingColor2Uint` | `public readonly Color ClothingColor2` / `public readonly uint ClothingColor2Uint` | 衣物第二色。**与 `Color2` 恒等。** |
| `BannerBackgroundColor` / `BannerBackgroundColorUint` | `public readonly Color BannerBackgroundColor` / `public readonly uint BannerBackgroundColorUint` | 旗帜底色：`swapColors ? culture.BackgroundColor2 : culture.BackgroundColor1`。**取的是 BackgroundColor 系列，不是 Color 系列。** |
| `BannerForegroundColor` / `BannerForegroundColorUint` | `public readonly Color BannerForegroundColor` / `public readonly uint BannerForegroundColorUint` | 旗帜前景色：`swapColors ? culture.ForegroundColor2 : culture.ForegroundColor1`。 |

（结构体本身没有任何方法——14 个字段 + 1 个构造器就是全部公开面。）

## 真实示例

第一种：从工厂拿一套，然后按 uint 取值喂给生成数据。这是官方 `SpawningBehaviorBase.cs:118-127` 的形状：

```csharp
using System.Linq;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions.Multiplayer;

public class MyUniformApplier : MissionBehavior
{
    public override MissionBehaviorType BehaviorType
    {
        get { return MissionBehaviorType.Other; }
    }

    public override void OnAgentCreated(Agent agent)
    {
        Mission mission = this.Mission;
        Team team = agent.Team;
        if (team == null)
        {
            return;
        }

        MBReadOnlyList<BasicCultureObject> all = MBObjectManager.Instance.GetObjectTypeList<BasicCultureObject>();
        BasicCultureObject culture = all != null && all.Count > 0 ? all.FirstOrDefault<BasicCultureObject>() : null;

        // 同文化时 CreateWith 会自动翻转 defender 一侧，所以要按队伍取对应那套
        MultiplayerBattleColors colors = MultiplayerBattleColors.CreateWith(culture, culture);
        MultiplayerBattleColors.MultiplayerCultureColorInfo info =
            (mission.Teams.Attacker == team) ? colors.AttackerColors : colors.DefenderColors;

        if (info.Culture == null)
        {
            return;  // GetFallbackCulture 失败时 Culture 就是 null，此时所有 uint 都是 0
        }

        // 官方的写法：Banner(bannerKey, color1, color2)，这里 color1 是背景色
        Banner banner = new Banner(agent.Character.Name.ToString(), info.BannerBackgroundColorUint, info.BannerForegroundColorUint);
        Debug.Print("clothing1=" + info.ClothingColor1Uint + " banner=" + info.BannerBackgroundColorUint, 0);
    }
}
```

第二种：手动构造一套色板。`swapColors` 决定的是**2 号配色**，等价于 `CreateWith(culture, culture)` 的防守方那一侧：

```csharp
BasicCultureObject culture = MBObjectManager.Instance
    .GetObjectTypeList<BasicCultureObject>().FirstOrDefault<BasicCultureObject>();

MultiplayerBattleColors.MultiplayerCultureColorInfo normal =
    new MultiplayerBattleColors.MultiplayerCultureColorInfo(culture, false);
MultiplayerBattleColors.MultiplayerCultureColorInfo flipped =
    new MultiplayerBattleColors.MultiplayerCultureColorInfo(culture, true);

// 1.3.0 上这两组恒等——ClothingColor* 没有独立取值来源
Debug.Print("Color1 == ClothingColor1 ? " + (normal.Color1Uint == normal.ClothingColor1Uint), 0);

// uint 是 0xAABBGGRR，从高到低是 A、B、G、R
string hex = string.Format("{0:X2}{1:X2}{2:X2}{3:X2}",
    (normal.Color1Uint >> 24) & 0xFFu,
    (normal.Color1Uint >> 16) & 0xFFu,
    (normal.Color1Uint >> 8) & 0xFFu,
    normal.Color1Uint & 0xFFu);
```

第三种：null 文化时全 0 的行为。这条路径真实存在——`GetFallbackCulture` 在对象管理器里没有 `BasicCultureObject` 时会 `Debug.FailedAssert` 并返回 `null`：

```csharp
MultiplayerBattleColors.MultiplayerCultureColorInfo empty =
    new MultiplayerBattleColors.MultiplayerCultureColorInfo(null, false);

// empty.Culture == null
// empty.Color1Uint == 0U，Color2Uint / ClothingColor1Uint / BannerBackgroundColorUint … 全部 0U
// Color.FromUint(0) => r = g = b = a = 0，即完全透明的黑色（不是「不设置」，是「透明黑」）
Debug.Print("bg=" + empty.BannerBackgroundColorUint + " culture=" + (empty.Culture == null), 0);
```

## 风险与边界

- **它是嵌套类型，引用必须带外层名。** 只写 `MultiplayerCultureColorInfo` 而没有 `using` 别名时会编译失败。正确写法是 `MultiplayerBattleColors.MultiplayerCultureColorInfo`，或在自己的代码里 `using Info = TaleWorlds.MountAndBlade.Missions.Multiplayer.MultiplayerBattleColors.MultiplayerCultureColorInfo;`。
- **`culture` 为 null 静默产出全 0。** 构造器没有任何校验。`Color.FromUint(0)` 是**透明黑**，不是「保持不变」也不是抛异常。用之前先判 `Culture != null`。
- **`ClothingColor1` 与 `Color1` 在 1.3.0 恒等，`ClothingColor2` 与 `Color2` 恒等。** 构造函数里两行展开后的表达式逐字相同。不要写依赖「衣物色另有一套」的功能；将来版本若拆开，你的代码会静默改变外观。
- **uint 是 `0xAABBGGRR`。** `Color.FromUint` 里 alpha 取 `>> 24`。手拼颜色串时位序反了不会报错，只会得到完全不同的颜色。缩放系数 `0.003921569f` 是 1/255 的定点近似。
- **`Color` 与 `Uint` 是两份独立存储但同源。** 它们在构造时同时算出，之后互不影响（都是 readonly）。要下发给引擎/网络用 `Uint`，要自己混色用 `Color`。
- **`Culture` 存的是原引用。** 它既用来做「两方是不是同一文化」的引用相等判定，也是你回头查文化定义（`StringId` / `Name`）的入口。跨任务它可能失效。
- **没有 `Equals` / `GetHashCode` 覆写。** 默认结构体 `Equals` 会逐字段比较，其中 `BasicCultureObject` 与 `Color` 的相等语义都不易推理。**别拿它当 `Dictionary` 的键**，只取 `uint` 字段做键。
- **`readonly struct` 不等于不可变引用。** `Color` 与 `BasicCultureObject` 都是引用类型字段，结构体本身不可变不代表它们指向的对象不变。`Color` 是值类型（安全），`Culture` 不是。
- **14 个字段没有任何 XML 注释或特性。** 语义只能从构造器表达式反推——这正是本页逐字段列出推导结果的原因。
- **14 个字段意味着任何按字段顺序的序列化/反射遍历都是脆的。** 新版本加一个颜色属性就会多一对 `Color`/`Uint`，老代码若假设了顺序或长度就会错位。

## 跨版本提示

这是 1.3.0 里 `Missions/Multiplayer/` 目录下少数几个纯托管的小类型，形状极简但耦合面不小：它一对一映射 `BasicCultureObject` 的颜色属性。

升级时盯两处：

**一是 `BasicCultureObject` 的颜色属性集合。** 它的 8 个颜色属性（`Color` / `Color2` / `ClothAlternativeColor` / `ClothAlternativeColor2` / `BackgroundColor1` / `BackgroundColor2` / `ForegroundColor1` / `ForegroundColor2`）都是 `uint { get; private set; }`，从 XML 十六进制解析，**缺属性时默认 `uint.MaxValue`（不透明白）**。本结构体只用了其中 6 个（没用到 `ClothAlternativeColor*`）；若后续版本把衣物色改成读 `ClothAlternativeColor*`，`ClothingColor1/2` 就不再等于 `Color1/2`——这是最可能发生的一次变化。

**二是构造函数里的翻转规则。** `swapColors` 的三元表达式目前完全对称（1↔2 互换）。若某版本改成别的变换（比如按亮度翻转或按色相反转），依赖「同文化时双方配色可区分」的逻辑要重新验证。

另外注意它和 [MultiplayerBattleColors](../MultiplayerBattleColors) 的分工：外层负责「选哪一套」，内层负责「一套里有什么」。两者同文件、同命名空间、同 `readonly struct`，实践上总是成对出现——读代码时不要只读一半。

## 依赖关系

- 外层容器：[MultiplayerBattleColors](../MultiplayerBattleColors) 的 `AttackerColors` / `DefenderColors` 两个字段都是本类型，`CreateWith` / `GetPeerColors` 返回它，`GetCultureColors` 私有地构造它
- 数据源：[BasicCultureObject](../../core-extra/BasicCultureObject) 提供 `Color` / `Color2` / `BackgroundColor1` / `BackgroundColor2` / `ForegroundColor1` / `ForegroundColor2`，从 XML 十六进制解析，缺省 `uint.MaxValue`
- 位解包：[Color](../../core-extra/Color) 的 `FromUint(uint)` 决定 `0xAABBGGRR` 位序与 `0.003921569f` 缩放；[ManagedParameters](../../core-extra/ManagedParameters) 无关，但同一 Color 类型被大量外观代码共用
- 选择依据：[MissionPeer](../../mission-ext/MissionPeer) 的 `Team`（[BattleSideEnum](../../core-extra/BattleSideEnum)）与 `Culture` 决定 `GetPeerColors` 返回哪一套
- 消费方：[SpawningBehaviorBase](../../mission-ext/SpawningBehaviorBase) / [SiegeSpawningBehavior](../../mission-ext/SiegeSpawningBehavior) / [WarmupSpawningBehavior](../../mission-ext/WarmupSpawningBehavior) / [FlagDominationSpawningBehavior](../../mission-ext/FlagDominationSpawningBehavior) 与各 `MissionMultiplayer*` 任务，是全树 20 处调用点
- 下游：[Banner](../../core-extra/Banner) / [AgentBuildData](../../mission-ext/AgentBuildData) / [Agent](../Agent) 接收这些 uint 字段
- 挂载点：[MissionBehavior](../MissionBehavior) 是示例里触发取色的回调宿主
- 桶首页：[mission API 分区](../)