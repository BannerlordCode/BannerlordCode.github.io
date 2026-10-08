# brief · b10-partycomponent（v1.4.6/zh 手写深页写作线）

- 批次：批 10
- 页面：`content/v1.4.6/zh/api/campaign/PartyComponent.md`
- 源文件：`TaleWorlds.CampaignSystem/Party/PartyComponents/PartyComponent.cs`（197 行）
- 锚表：`tools/_verify/_tmp/anchors/b10-partycomponent.txt`（26 个锚点，派单前生成）
- dup 检查：`find <root> -name PartyComponent.cs | wc -l` → **1**（规避 `ambiguous` 门禁洞）
- 派单时刻：2026-10-08T01:36Z
- 落盘理由（boss #22603）：让「brief 不写未经测量的断言」可机械检查。

---

## 题头三行（命令实测值，非断言）

```
**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`
**Type:** `public abstract class PartyComponent`
**Source:** `TaleWorlds.CampaignSystem/Party/PartyComponents/PartyComponent.cs`
```

实测输出：
```
11:	public abstract class PartyComponent
（wc -l = 197, anchors = 26）
```

## 内容提示（**指令式**写法 —— 描述去找什么，不断言有什么）

> 请自己读源码后确定要写哪些成员。这一页请写清三件事：
> 1. 它在「队伍」这个对象里扮演**什么角色**，以及它与队伍本体之间**谁持有谁**（源码里找持有关系，不要推断）。
> 2. **在源码里实际找到的派生类**分别负责哪一类队伍 —— **请逐个 grep 核实后再写，不要凭常识推断有哪几类**；并说明这些派生类是通过什么机制被注册/识别的。
> 3. 想**自建一类队伍**时应该从哪里入手，以及**必须实现哪些成员**才能让队伍正常工作（哪些是抽象成员、哪些有默认实现）。

**自查**：本节为指令式（「请写清 / 请核实」），**不断言**该类具有任何具体能力、成员或派生类。仅出现的名字在「题头实测值」中，有命令支撑。

## 门禁口径（预置，避免 worker 去读校验脚本）

- `checked` = 页面里所有 `文件.cs:N` 形态引用（写全文件名），全文任何位置都算，表格行内也算；要求 `checked ≥ 关键成员表行数`
- `J6=deep_pass` 硬要求 = `## 参见` 里 ≥2 条 markdown 链接
- `J7` = 全文不得出现 `自动生成` / `Auto-generated stub` / `<!-- v*-skeleton -->` / `是 TaleWorlds.X 下的公开类型` / `阅读时先通过属性了解状态`
- `J8` 正文 > 2500 字节；`J9` csharp 块 ≥3 有效行含真实调用；`J10` 链接只在 `## 参见`/`## 导航`；`J11` 叶子目标不带尾斜杠

## 链接白名单（已逐条实测存在）

`../MobileParty` `../PartyBase` `../Campaign` `../Hero` `../Clan` `../Kingdom` `../Settlement` `../Town` `../Village` `../TroopRoster` `../ItemRoster` `../CampaignObjectManager` `../CampaignTime` `../_index` `../../campaign-ext/MBObjectBase` `../../campaign-ext/MBObjectManager` `../../core-extra/Game`

## 硬约束（磁盘可判定的后果）

> **本轮结束时若 `C:/WorkSpace/Bannerlord/BannerlordCode.github.io/content/v1.4.6/zh/api/campaign/PartyComponent.md` 不存在，则本轮视为未完成 —— 直接回报「未完成」并说明卡点。**

## 边界

- leaf-only：不动任何 `_index.md`；不 `git add`/`git commit`；不改 `tools/**`
- **第一个动作必须是创建文件**
- 若源码与 brief 冲突，**以源码为准**并在回报里指出
