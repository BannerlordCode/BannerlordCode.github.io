---
title: "MultiplayerBattleColors"
description: "多人对战双方配色的只读值类型：CreateWith(BasicCultureObject, BasicCultureObject) 按文化解析出一对 MultiplayerCultureColorInfo，两边同文化时自动翻转防守方色板；Color 从 uint 解包的位序是 ABGR（高位 alpha）而不是 RGBA。"
---

# MultiplayerBattleColors

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Multiplayer`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public readonly struct MultiplayerBattleColors`（内含 `public readonly struct MultiplayerCultureColorInfo`）
**Base:** 无（值类型，仅隐式 `System.Object`；`MultiplayerCultureColorInfo` 同样是独立值类型，不继承本类型）
**File:** `TaleWorlds.MountAndBlade/Missions/Multiplayer/MultiplayerBattleColors.cs`（150 行 / 6.1 KB）

## 概述

`MultiplayerBattleColors` 解决一个很具体的问题：**一场多人对战里，进攻方和防守方各用哪一套颜色？** 它是两个字段（`AttackerColors` / `DefenderColors`）的只读结构体，每个字段是**嵌套的** `MultiplayerCultureColorInfo`——后者有 14 个 public readonly 字段（7 组「`Color` + `ColorUint`」配对），在构造器里一次性从 [BasicCultureObject](../../core-extra/BasicCultureObject) 抄好，不留任何运行时计算。

唯一推荐的入口是静态工厂 `public static MultiplayerBattleColors CreateWith(BasicCultureObject attackerCulture, BasicCultureObject defenderCulture)`，它转手调私有的 `GetCultureColors`。后者做三件事：**null 兜底**（任一文化为 null 时用 `GetFallbackCulture()` 顶上）、**决定要不要翻转**（`swapColors = !string.IsNullOrEmpty(attackerCulture.StringId) && !string.IsNullOrEmpty(defenderCulture.StringId) && attackerCulture.StringId == defenderCulture.StringId`）、**分别构造两个色板**——注意构造时 `attackerColors` 传的是 `false`，`defenderColors` 传的是 `swapColors`。**翻转只作用于防守方**。

消费端是 `public MultiplayerCultureColorInfo GetPeerColors(MissionPeer peer)`，它回答「这个 peer 该显示哪一套颜色」。全树 20 处调用点（`SpawningBehaviorBase`、`SiegeSpawningBehavior`、`WarmupSpawningBehavior`、`FlagDominationSpawningBehavior`、`MissionNetworkComponent` 以及四个 `MissionMultiplayer*` 任务类）都是 `CreateWith(...).GetPeerColors(peer)` 或先存变量再取字段的形状。

## 心智模型

把它当成**「把文化定义翻译成可直接下发给渲染层的颜色包」的一次性求值器**。翻译发生在 `CreateWith` 那一刻，之后这个结构体就是一堆不可变的数。

**第一层：颜色是 uint，解包的位序是 ABGR。** `MultiplayerCultureColorInfo` 构造器里每个字段都是 `Color.FromUint(this.Color1Uint = (...))`，而 [Color](../../core-extra/Color) 的 `public static Color FromUint(uint color)` 是纯位运算：

```csharp
float alpha = (float)(byte)(color >> 24) * 0.003921569f;
float red   = (float)(byte)(color >> 16) * 0.003921569f;
float green = (float)(byte)(color >> 8)  * 0.003921569f;
float blue  = (float)(byte)(color)       * 0.003921569f;
```

**最高字节是 alpha，不是 red。** 那个 `0.003921569f` 是 1/255 的定点近似（不是精确的 `1f/255f`）。所以别拿 `Color1Uint` 当 `0xRRGGBB` 拼字符串——它是 `0xAABBGGRR`。

**第二层：`swapColors` 是一次 1↔2 对调，不是亮度变换。** 构造器里每一项都是 `swapColors ? (culture?.Color2 ?? 0U) : (culture?.Color ?? 0U)` 这个形状的变体：主体色、衣物色、旗帜底色、旗帜前景色各一对，全部互换。所以「翻转」的效果是**防守方整体套用文化配色的第二套配色**，视觉上与进攻方区分开——不是变亮、不是变暗。

**第三层：`ClothingColor1` 与 `Color1` 在实现上是同一条表达式。** 两者都是 `swapColors ? culture.Color2 : culture.Color`。也就是说**这两个字段在当前实现里恒等**，不存在「主体色一套、衣物色另一套」的分离。它们各自留 uint 副本只是为了让调用方按需取原始值。

**第四层：`GetPeerColors` 的判据是「引用相等」，不是 StringId 相等。** 它的第一层分支是 `if (this.AttackerColors.Culture == this.DefenderColors.Culture)`。`BasicCultureObject` 继承的 `MBObjectBase` 在托管源码里**根本没有对应文件**（它来自 `Bannerlord.Native.dll`），所以这条 `==` 的确切语义无法在 C# 源码里核实；实践上它成立是因为同一文化在对象管理器里只注册一份、`CreateWith` 拿到的两个引用指向同一实例。**不要假设它比较的是文化名。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AttackerColors` | `public readonly MultiplayerBattleColors.MultiplayerCultureColorInfo AttackerColors` | 进攻方色板。`GetCultureColors` 里始终以 `swapColors: false` 构造，即永远是文化的「第一套」配色。 |
| `DefenderColors` | `public readonly MultiplayerBattleColors.MultiplayerCultureColorInfo DefenderColors` | 防守方色板。`swapColors` 为真时整套翻转 1↔2，用于和进攻方做视觉区分。 |
| 构造器 | `public MultiplayerBattleColors(MultiplayerBattleColors.MultiplayerCultureColorInfo attackerColors, MultiplayerBattleColors.MultiplayerCultureColorInfo defenderColors)` | 直接装两个已算好的色板，**不做任何兜底或翻转**。想手动配色时用这个；想让引擎决定就用 `CreateWith`。 |
| `CreateWith` | `public static MultiplayerBattleColors CreateWith(BasicCultureObject attackerCulture, BasicCultureObject defenderCulture)` | 公开工厂，方法体就一句 `return MultiplayerBattleColors.GetCultureColors(attackerCulture, defenderCulture);` |
| `GetPeerColors` | `public MultiplayerCultureColorInfo GetPeerColors(MissionPeer peer)` | 按 peer 归属挑一套颜色。`peer == null` → 进攻方；两方文化引用相同 → 看 `peer.Team.Side`；否则 → 看 `peer.Culture` 是否是进攻方那个。 |
| `GetCultureColors`（私有） | `private static MultiplayerBattleColors GetCultureColors(BasicCultureObject, BasicCultureObject)` | 真正的逻辑所在：null → fallback、`swapColors` 判定、按侧分别构造。 |
| `GetFallbackCulture`（私有） | `private static BasicCultureObject GetFallbackCulture()` | `MBObjectManager.Instance.GetObjectTypeList<BasicCultureObject>()` 取 `.FirstOrDefault<BasicCultureObject>()`；列表为 null 或空时先 `Debug.FailedAssert("No culture objects in the object manager", ...)` 再 `return null`。 |
| `MultiplayerCultureColorInfo.Culture` | `public readonly BasicCultureObject Culture` | 原文化引用。注意：**可能为 null**（文化为 null 时构造器仍然只赋 `this.Culture = culture`，后面的颜色全部落到 `?? 0U`）。 |
| `Color1` / `Color1Uint` | `public readonly Color Color1` / `public readonly uint Color1Uint` | 主体第一色。`swapColors` 时取 `culture.Color2`，否则 `culture.Color`；`culture` 为 null 时是 `0U`。 |
| `Color2` / `Color2Uint` | `public readonly Color Color2` / `public readonly uint Color2Uint` | 主体第二色。永远是 `Color1` 的对面那套。 |
| `ClothingColor1` / `ClothingColor1Uint` | `public readonly Color ClothingColor1` / `public readonly uint ClothingColor1Uint` | 衣物第一色。**实现上与 `Color1` 表达式完全相同，当前版本里两者恒等。** |
| `ClothingColor2` / `ClothingColor2Uint` | `public readonly Color ClothingColor2` / `public readonly uint ClothingColor2Uint` | 衣物第二色。与 `Color2` 恒等。 |
| `BannerBackgroundColor` / `BannerBackgroundColorUint` | `public readonly Color BannerBackgroundColor` / `public readonly uint BannerBackgroundColorUint` | 旗帜底色：`swapColors ? culture.BackgroundColor2 : culture.BackgroundColor1`。**走的是 1/2 号背景色，不是 `Color1`/`Color2`。** |
| `BannerForegroundColor` / `BannerForegroundColorUint` | `public readonly Color BannerForegroundColor` / `public readonly uint BannerForegroundColorUint` | 旗帜前景色：`swapColors ? culture.ForegroundColor2 : culture.ForegroundColor1`。 |

## 真实示例

第一种：完全按官方的形状用——`CreateWith` 拿整套，按 peer 挑一套。这段直接照 `SpawningBehaviorBase.cs:73-84` / `:118-127` 的结构：

```csharp
using System.Linq;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions.Multiplayer;
using TaleWorlds.ObjectSystem;

public class MySpawnColorApplier : SpawningBehaviorBase
{
    private bool _reported;

    protected override bool IsRoundInProgress()
    {
        return Mission.Current.IsFieldBattle;
    }

    public override bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer)
    {
        return base.AllowEarlyAgentVisualsDespawning(missionPeer);
    }

    public override void OnTick(float dt)
    {
        base.OnTick(dt);
        if (this._reported)
        {
            return;
        }
        this._reported = true;

        BasicCultureObject culture1 = MBObjectManager.Instance.GetObject<BasicCultureObject>(
            MultiplayerOptions.OptionType.CultureTeam1.GetStrValue(MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions));
        BasicCultureObject culture2 = MBObjectManager.Instance.GetObject<BasicCultureObject>(
            MultiplayerOptions.OptionType.CultureTeam2.GetStrValue(MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions));

        MultiplayerBattleColors colors = MultiplayerBattleColors.CreateWith(culture1, culture2);

        foreach (NetworkCommunicator communicator in GameNetwork.NetworkPeers)
        {
            MissionPeer peer = communicator.GetComponent<MissionPeer>();
            if (peer == null)
            {
                continue;
            }
            MultiplayerBattleColors.MultiplayerCultureColorInfo peerColors = colors.GetPeerColors(peer);
            uint clothing1 = peerColors.ClothingColor1Uint;
            uint clothing2 = peerColors.ClothingColor2Uint;
            uint bannerBg = peerColors.BannerBackgroundColorUint;
            uint bannerFg = peerColors.BannerForegroundColorUint;
            Banner banner = new Banner(peer.Peer.BannerCode, bannerBg, bannerFg);
            Debug.Print("peer colors " + Describe(peerColors) + " banner " + banner.ToString(), 0);
        }
    }

    private static string Describe(MultiplayerBattleColors.MultiplayerCultureColorInfo info)
    {
        // uint 是 0xAABBGGRR，从高到低依次是 A、B、G、R
        return string.Format("A={0:X2} B={1:X2} G={2:X2} R={3:X2}",
            (info.Color1Uint >> 24) & 0xFFu,
            (info.Color1Uint >> 16) & 0xFFu,
            (info.Color1Uint >> 8) & 0xFFu,
            info.Color1Uint & 0xFFu);
    }
}
```

`SpawningBehaviorBase` 本身是 `public abstract class`，有两个抽象成员必须实现：`protected abstract bool IsRoundInProgress()` 和 `public abstract bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer)`。第一段用的是官方 `SpawningBehaviorBase.cs:73-127` 的取色形状，只是换了个真实存在的覆写点。

注意 `GetPeerColors(peer)` 在这里每个 peer 调一次——它内部会重走一遍「两文化是否引用相等」的判定，peer 多时把结果缓存成 `Dictionary<MissionPeer, MultiplayerCultureColorInfo>` 更好。

第二种：不用 `CreateWith`，直接用公开构造器装两套已经算好的色板——这是唯一需要手调构造器的合法场景（比如你从别处已经拿到了两个 `MultiplayerCultureColorInfo`）：

```csharp
MultiplayerBattleColors.MultiplayerCultureColorInfo attackerInfo =
    new MultiplayerBattleColors.MultiplayerCultureColorInfo(culture1, false);
MultiplayerBattleColors.MultiplayerCultureColorInfo defenderInfo =
    new MultiplayerBattleColors.MultiplayerCultureColorInfo(culture2, true); // 手动翻转

MultiplayerBattleColors manual = new MultiplayerBattleColors(attackerInfo, defenderInfo);
uint defenderPrimary = manual.DefenderColors.Color1Uint; // = culture2.Color2（因为 swapColors = true）
```

对照 `GetCultureColors` 的写法，引擎也是 `attacker → false, defender → swapColors`，所以这两行和 `CreateWith(culture1, culture2)` 在「两文化不同」时等价。

第三种：颜色为 null 时的兜底路径。`GetFallbackCulture` 是私有的，你要复刻它的行为就是自己去对象管理器拿第一个：

```csharp
MBReadOnlyList<BasicCultureObject> all = MBObjectManager.Instance.GetObjectTypeList<BasicCultureObject>();
BasicCultureObject fallback = all != null && all.Count > 0 ? all.FirstOrDefault<BasicCultureObject>() : null;

MultiplayerBattleColors colors = MultiplayerBattleColors.CreateWith(fallback, null);
// fallback 为 null 时：Assert 不会触发（走的是 CreateWith 的 null 兜底分支），
// GetCultureColors 内部会再用 GetFallbackCulture() 顶替；若那里也拿不到，
// 全部 14 个 uint 字段都是 0，Color.FromUint(0) => r=g=b=a=0 的完全透明黑。
```

这段也是「`ClothingColor1` 恒等于 `Color1`」的实测入口：把 `peerColors.ClothingColor1Uint` 和 `peerColors.Color1Uint` 一起打出来，在 1.3.0 上它们永远相等。

## 风险与边界

- **uint 是 `0xAABBGGRR`，不是 `0xRRGGBB`。** `Color.FromUint` 里 alpha 取 `>> 24`。你若在日志/配置里手拼颜色串，位序搞反会得到完全不同的颜色且不报错。
- **`ClothingColor1` 与 `Color1`、`ClothingColor2` 与 `Color2` 在 1.3.0 里恒等。** 不要假设「衣物色是另一套配置」；如果将来版本把它们拆开，用了 `ClothingColor*` 的代码会静默改变外观。
- **`swapColors` 只翻转防守方。** `GetCultureColors` 给 attacker 传 `false`、给 defender 传 `swapColors`。自己调公开构造器传 `true` 给 defender 就是引擎那条路径。
- **「同文化」的判定是引用相等。** `GetPeerColors` 与 `GetCultureColors` 各用一次：`GetCultureColors` 用 `StringId` 字符串比，`GetPeerColors` 用 `Culture ==` 对象比。同一个文化对象注册进 `MBObjectManager` 只有一份，所以两者结论一致；但如果你自己 `new` 了一个 `BasicCultureObject` 塞进参数（它有 public 无参构造吗？源码里只见到 XML 加载路径），行为会不可预测。
- **`MultiplayerCultureColorInfo.Culture` 允许为 null。** 构造器不校验颜色来源，全部走 `?? 0U`。取 `Color1Uint` 之前先确认 `Culture != null`，否则你拿到的是「透明黑」而不是「没设置」。
- **`GetFallbackCulture` 失败时返回 null 而不是抛异常。** 它只 `Debug.FailedAssert`。发布构建里 assert 可能被编译掉，你会安静地拿到一套全 0 的颜色。
- **`BasicCultureObject` 的颜色默认值是 `uint.MaxValue`。** XML 里缺 `color` 属性时代码走 `node.Attributes["color"] == null ? uint.MaxValue : Convert.ToUInt32(node.Attributes["color"].Value, 16)`。`uint.MaxValue` 解包出来是**不透明白**，不是黑色——「颜色没配」的默认表现不是透明。
- **结构体只有两个 readonly 字段，没有 `Equals`/`GetHashCode` 覆写。** 它是纯数据容器，别放进 `Dictionary` 当键依赖值语义——默认结构体 `Equals` 会逐字段比较，而 `MultiplayerCultureColorInfo` 的字段里含 `BasicCultureObject` 与 `Color`（`Color` 是否覆写了 `Equals` 需要看 `TaleWorlds.Library`），实际结果不易推理。要做键请只用 `uint` 字段。
- **`MultiplayerCultureColorInfo` 是嵌套类型，写全名要带外层。** 源码里构造器与字段声明都写成 `MultiplayerBattleColors.MultiplayerCultureColorInfo`；只写 `MultiplayerCultureColorInfo` 在没有 `using` 别名时会编译失败。
- **20 处调用点分布在对战任务的生成与网络阶段。** `MissionNetworkComponent.cs:373` 是 `MultiplayerBattleColors.CreateWith(@object, object2).GetPeerColors(component);` 的单行链式写法——注意 `CreateWith` 每次都会重新做一遍 native 对象管理器查询，高频路径上别这么写。

## 跨版本提示

这一版的形状很稳定：两个 readonly 字段 + 一个静态工厂 + 一个按 peer 择色的方法 + 一个 14 字段的嵌套只读结构体。跨版本要盯的是**`BasicCultureObject` 的颜色属性集合**——它多出新属性时，`MultiplayerCultureColorInfo` 可能跟着加字段（每加一个颜色属性就多一对 `Color` / `ColorUint`）。新增字段对**读取**旧字段的代码无影响，但如果你按「字段顺序」做序列化或反射遍历就会错位。

第二个要盯的是 **`GetPeerColors` 的判据**。1.3.0 用「文化引用相等就退回看 `Team.Side`」这一套；如果后续版本改成别的判定（比如按 `MissionPeer.Team` 优先），依赖「同文化时按阵营区分」这层回退逻辑的 mod 会看到行为变化。改这个文件时值得 diff 一下这个方法体。

第三个是 `GetFallbackCulture` 的存在与否。它是给「文化缺失」兜底的；如果某个版本改成直接在 `CreateWith` 里抛异常，你的启动代码要跟着改判空/捕获。

## 依赖关系

- 数据源：[BasicCultureObject](../../core-extra/BasicCultureObject) 提供 `Color` / `Color2` / `BackgroundColor1` / `BackgroundColor2` / `ForegroundColor1` / `ForegroundColor2`，全部 `uint { get; private set; }`，从 XML 十六进制解析
- 位解包：[Color](../../core-extra/Color) 的 `FromUint(uint)` 决定 ABGR 位序与 `0.003921569f` 缩放
- 查询来源：[MBObjectManagerExtensions](../../core-extra/MBObjectManagerExtensions) 提供 `MBObjectManager.Instance.GetObjectTypeList<BasicCultureObject>()`，`GetFallbackCulture` 靠它拿列表
- 择色输入：[MissionPeer](../../mission-ext/MissionPeer) 提供 `Team`（→ `BattleSideEnum`，[core-extra/BattleSideEnum](../../core-extra/BattleSideEnum)）与 `Culture`（get/set，setter 会广播 `ChangeCulture` 网络消息）
- 主要调用方：[SpawningBehaviorBase](../../mission-ext/SpawningBehaviorBase)、[SiegeSpawningBehavior](../../mission-ext/SiegeSpawningBehavior)、[WarmupSpawningBehavior](../../mission-ext/WarmupSpawningBehavior) 与各 `MissionMultiplayer*` 任务
- 嵌套类型的独立页：[MultiplayerCultureColorInfo](../MultiplayerCultureColorInfo) 目前仍是自动生成的空壳页；该类型是本类型的嵌套成员，本页已完整覆盖其 14 个字段
- 桶首页：[mission API 分区](../)