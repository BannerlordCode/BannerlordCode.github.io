---
title: "custombattle 桶 — 自定义对战 TaleWorlds.MountAndBlade.CustomBattle（0 张类页）"
description: "custombattle 桶对应 TaleWorlds.MountAndBlade.CustomBattle 及其 4 个子命名空间，共 5 个。实测目录 41 个 .cs 文件、40 个命名空间级类型声明。本页给出职责、可复跑的查法，以及为什么 mod 对它的兴趣集中在一个很窄的入口上。"
---
# custombattle：自定义对战（`TaleWorlds.MountAndBlade.CustomBattle*`）

> **覆盖状态：本桶 0 张类页。**
> 结论先给：**mod 对它的兴趣集中在一个很窄的入口上——「从自己的模块里发起一场符合配置的自定义对战」。** 除此之外，绝大多数类型是官方实现与官方界面。本页是导览，页面上出现的类型名全部是纯文本，**没有任何一个指向尚未撰写的类页**。

## 这个桶在源码里对应什么

归属规则 `TaleWorlds.MountAndBlade.CustomBattle` → `custombattle` 是一条**比父前缀 `TaleWorlds.MountAndBlade` 更长**的规则，所以它赢过 [mission-ext](../mission-ext) 的兜底规则。源码目录 `bannerlord-1.4.6/TaleWorlds.MountAndBlade.CustomBattle/`。

**实测规模**（分命名空间统计，口径见下）：

| 命名空间 | 命名空间级类型声明数 |
| --- | --- |
| `TaleWorlds.MountAndBlade.CustomBattle` | 16 |
| `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` | 11 |
| `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem` | 11 |
| `TaleWorlds.MountAndBlade.CustomBattle.CustomBattleObjects` | 1 |
| `TaleWorlds.MountAndBlade.CustomBattle.Views` | 1 |
| **合计** | **40** |

目录层面：`.cs` 文件数 **41**（含 `Properties/AssemblyInfo.cs`），其中声明上述某个命名空间的有 40 个。

**口径定义**：`.cs 文件数` = `find <目录> -name '*.cs' | wc -l`；`命名空间级类型声明数` = 声明该命名空间的文件里缩进恰好一个制表符的类型 / 委托声明行数，**不含嵌套类型**。

这里有个容易对不上的地方：根命名空间里有 16 个声明，但你会数出 17 个类型——差额是嵌套类型 `CompositionType`，它声明在 `ArmyCompositionItemVM` 内部，不在命名空间层级。

还有个**命名空间重名**要留意：`CustomBattle` 这个名字同时是**程序集根名**、**一个子命名空间**、**一个类型名**，还和一层 `CustomBattle.CustomBattle` 撞名。写文档和写 `using` 时要分清你指的是哪一个。

## 读源码：可复跑的查法

在工作区根目录执行：

```bash
find bannerlord-1.4.6/TaleWorlds.MountAndBlade.CustomBattle -name '*.cs' | wc -l

# 这个目录下到底有哪几个命名空间
grep -rhoE '^namespace TaleWorlds\.MountAndBlade\.CustomBattle[A-Za-z.]*' \
  bannerlord-1.4.6/TaleWorlds.MountAndBlade.CustomBattle --include='*.cs' | sort -u

# 按命名空间分组数声明（exact = 只算该命名空间本身；改成 prefix 则含其下所有子命名空间）
for ns in TaleWorlds.MountAndBlade.CustomBattle \
           TaleWorlds.MountAndBlade.CustomBattle.CustomBattle \
           TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem \
           TaleWorlds.MountAndBlade.CustomBattle.CustomBattleObjects \
           TaleWorlds.MountAndBlade.CustomBattle.Views; do
  printf '%s: ' "$ns"
  awk -v pfx="$ns" '
    /^namespace / { ns=$2; sub(/[{[:space:]].*$/,"",ns); hit = (ns == pfx) }
    hit && /^\t(public |internal |abstract |sealed |static |partial |unsafe |readonly |new )*(class|struct|interface|enum|record|delegate)[ \t]+[A-Za-z_]/ { c++ }
    END { print c+0 }
  ' $(find bannerlord-1.4.6/TaleWorlds.MountAndBlade.CustomBattle -name '*.cs')
done

# 只想看根命名空间里的 16 个声明
grep -rl '^namespace TaleWorlds\.MountAndBlade\.CustomBattle$' \
  bannerlord-1.4.6/TaleWorlds.MountAndBlade.CustomBattle --include='*.cs' \
  | xargs grep -h '^\tpublic\|^\tinternal' | grep -E 'class |struct |interface |enum '

## 什么时候会碰到它

**只有一种场景值得进这个桶——你想从自己的代码里发起一场自定义对战。**

自定义对战（主菜单里那套「自己配双方、地图、兵种、器械、时间」的对战模式）在 1.4.6 里是**数据驱动**的：一场对战由一份配置描述，谁跟谁打、用什么兵、在哪张图、有没有器械。这个桶就是这套配置的模型 + 执行它的模块。

所以对 mod 来说只有两件事有价值：

1. **发起对战** —— 构造一份对战配置（双方、地图、兵种构成、时间、场景），交给 `CustomBattleSubModule` 那条路径去跑。做「从我的任务里直接开一场遭遇战」这类功能时需要。
2. **读当前对战的配置** —— 判断这场自定义对战现在的设置是什么。

**其余都是官方实现与官方界面。** 那 11 个 `SelectionItem` 是选择界面里的一行（地图项、兵种项、场景项、时间项、赛季项…），另外约 6 个是 `*VM` 界面数据类。**你不会继承它们，也不会调用它们**——它们是官方「自定义对战」菜单的实现。

**心智模型**：把 `CustomBattleData` / `CustomBattleSceneData` 想成**一份对战的配置单**，`CustomBattleState` 是这份配置在运行时的状态，`CustomBattleSubModule` 是执行者，`*VM` / `SelectionItem` 是让你在界面上编辑这份配置单的官方 UI。mod 要做的是**绕过 UI 直接写配置单**，而不是改 UI。

**边界**：官方自定义对战和 [mission](../mission) 桶里的普通 mission 是两条路。做「战斗内行为」用 [mission](../mission) + [mission-ext](../mission-ext)；做「开一场特定配置的对战」才进本桶。搞混这两条会写出完全不同的代码。

## 一个名字会误导人的类型

`CPUBenchmarkMissionLogic` 和 `CPUBenchmarkMissionSpawnHandler`（都在本桶）——**这是性能基准测试用的 mission 逻辑和生成器，不是玩法功能**。`CPUBenchmark` 是「CPU 跑分」的意思。写文档时不要把它当成一个可复用的对战机制介绍，它属于开发工具。

## 按用途分组的类型索引（非链接，全部核实，未撰写类页）

下面每个名字都用 `grep -rw` 在 `bannerlord-1.4.6/TaleWorlds.MountAndBlade.CustomBattle/` 核实过。

**mod 真正会碰的：**

- `CustomBattleData` — 一场自定义对战的整体配置（双方、规则、结果）
- `CustomBattleSceneData` — 战场场景的配置（地图、场景、时间一类）
- `CustomBattleCompositionData` — 双方兵种构成的配置
- `CustomBattlePlayerSide` / `CustomBattlePlayerType` — 玩家在自定义对战里的立场与所属方
- `CustomBattleHelper` — 辅助工具；**注意它在 `CustomBattle.CustomBattle` 子命名空间里**，不在根命名空间
- `CustomBattleSubModule` — 执行这套流程的模块入口；和 [core](../core) 的 `Module` 是同一套模块机制
- `CustomBattleState` — 配置在运行时的状态

**需要认出、但通常不该用：**

- `CustomBattleScreen` — 官方的自定义对战选择界面
- `CustomBattleVM` / `CustomBattleSideVM` / `CustomBattleSiegeMachineVM` / `CustomBattleTroopTypeVM` / `CustomBattleFactionSelectionVM` — 官方界面的数据类
- `MapItemVM` / `FactionItemVM` / `GameTypeItemVM` / `PlayerSideItemVM` / `PlayerTypeItemVM` / `SceneLevelItemVM` / `SeasonItemVM` / `TimeOfDayItemVM` / `WallHitpointItemVM` / `TroopTypeSelectionPopUpVM` — 官方选择界面里的每一行
- `CustomBattleProvider` / `CustomBattleViews` / `CustomBattleSceneNotificationContextProvider` — 官方组装界面与通知的内部协作类型
- `CustomGame` / `CustomGameManager` — 自定义游戏的运行态与管理者
- `CustomBattleBannerEffects` / `CustomBattleTimeOfDay` — 展示效果与时间选项
- `CPUBenchmarkMissionLogic` / `CPUBenchmarkMissionSpawnHandler` — **性能基准测试工具，不是玩法**，见上文

## 桶间分工

| 你想做的事 | 该去哪个桶 |
| --- | --- |
| 发起一场配置好的自定义对战 | **本桶** |
| 战斗内行为、单位、mission 生命周期 | [mission](../mission) |
| 战斗层的扩展点与其余 MountAndBlade 命名空间 | [mission-ext](../mission-ext) |
| 官方沙盒玩法实现 | [sandbox](../sandbox) |
| 官方故事模式实现 | [storymode](../storymode) |

[mission-ext](../mission-ext) 是与本桶划分最紧的另一半（靠前缀长短分桶），两页互链。

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) — 含「不生成文档的目录」一节
- ↔ [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)