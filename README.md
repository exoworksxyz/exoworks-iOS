# ExoWorks iOS

A native iOS app version of ExoWorks built with Next.js and Capacitor. 

## 🚀 Project Description

ExoWorks iOS is a production-ready native iOS app. The app features:

- **Status Strip**: Connection status indicator
- **Workspace Card**: Main workspace information display
- **Workflow Stack**: Interactive workflow selection with visual connectors
- **Feature Lab**: Carousel-style feature cards
- **Deploy Panel**: Animated progress tracking with deploy functionality
- **Transactions Drawer**: Expandable Solana transaction history (simulated)
- **Home Indicator**: iOS-style visual swipe indicator

## 🛠 Tech Stack

- **Next.js 14** (App Router with static export)
- **React 18**
- **TailwindCSS 3**
- **TypeScript**
- **Capacitor 5** (iOS native wrapper)
- **Vanilla JS only** (no backend)

## 📋 Prerequisites

- **Node.js** 18+ and npm
- **Xcode** 14+ (for iOS development)
- **CocoaPods** (installed via `sudo gem install cocoapods`)
- **macOS** (required for iOS development)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd exoworks-ios
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Initialize Capacitor iOS project**
   ```bash
   npm run build
   npx cap add ios
   npx cap sync ios
   ```

4. **Install iOS dependencies**
   ```bash
   cd ios/App
   pod install
   cd ../..
   ```

## 🍎 Building for iOS

### Development Build

1. **Build the Next.js app**
   ```bash
   npm run build
   ```

2. **Sync with Capacitor**
   ```bash
   npm run ios:sync
   ```

3. **Open in Xcode**
   ```bash
   npm run ios:open
   ```

4. **In Xcode:**
   - Select your development team in Signing & Capabilities
   - Choose a simulator or connected device
   - Click the Run button (▶️) or press `Cmd + R`

### Production Build

1. **Build and sync**
   ```bash
   npm run build:ios
   ```

2. **Open in Xcode**
   ```bash
   npm run ios:open
   ```

3. **In Xcode:**
   - Select "Any iOS Device" or your connected device
   - Go to **Product → Archive**
   - Once archived, click **Distribute App**
   - Follow the prompts to create an `.ipa` file or upload to App Store

### Quick Build Script

For a complete build and open workflow:
```bash
npm run ios:run
```

## 🎨 Design Features

- **Mobile-first layout** centered at ~390px width
- **Dark theme** with deep black background
- **Primary color**: Deep electric purple (#6B3CFF)
- **Accent color**: Neon amber (#FFB547)
- **iOS-style elements**: Frosted glass effects, rounded cards, subtle glows
- **Native iOS experience**: Full-screen app with status bar integration

## 📊 Simulated Data

All data in this app is **simulated/fake**:

- **TPS**: ~2350 (simulated)
- **CPU**: ~14% (simulated)
- **RAM**: ~5.7GB (simulated)
- **Transaction hashes**: Randomly generated
- **Progress**: Starts at 72% (simulated)

**Note**: This app does NOT include:
- Real wallet connections
- Real trading functionality
- Real API calls
- Any illegal or abusive functionality

## 🔧 Available Scripts

- `npm run dev` - Start Next.js development server (web preview)
- `npm run build` - Build Next.js app for production
- `npm run build:ios` - Build and sync with iOS project
- `npm run ios:sync` - Sync web assets to iOS project
- `npm run ios:open` - Open iOS project in Xcode
- `npm run ios:run` - Build, sync, and open in Xcode
- `npm run start` - Start production server (web)
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
/exoworks-ios
  /app
    layout.tsx              # Root layout
    page.tsx                # Main page component
    globals.css             # Global styles and Tailwind imports
  /components
    CapacitorInit.tsx       # Capacitor plugin initialization
    StatusStrip.tsx         # Top status bar
    WorkspaceCard.tsx       # Workspace information card
    WorkflowStack.tsx       # Workflow selection cards
    FeatureLab.tsx          # Feature carousel
    DeployPanel.tsx         # Deploy progress panel
    TransactionsDrawer.tsx # Transaction history
    HomeIndicator.tsx       # iOS home indicator
  /lib
    fakeData.ts             # Simulated data generators
  /ios                     # iOS native project (generated)
    /App
      App.xcodeproj
      App.xcworkspace
      ...
  /out                     # Next.js static export (generated)
  /styles
    tailwind.config.ts      # Tailwind configuration
  capacitor.config.ts      # Capacitor configuration
  next.config.js           # Next.js configuration
  package.json             # Dependencies
  README.md                # This file
```

## 🚢 App Store Deployment

### Prepare for App Store

1. **Update app metadata in Xcode:**
   - Open `ios/App/App.xcworkspace`
   - Select the App target
   - Update **General** tab:
     - Display Name: "ExoWorks"
     - Bundle Identifier: `com.exoworks.ios` (or your own)
     - Version and Build numbers
   - Update **Signing & Capabilities**:
     - Select your development team
     - Enable required capabilities

2. **Add App Icons:**
   - In Xcode, go to **Assets.xcassets**
   - Add app icons in all required sizes
   - Recommended: 1024x1024px for App Store

3. **Configure Info.plist:**
   - Update app display name if needed
   - Configure URL schemes if required
   - Set privacy descriptions if using device features

### Archive and Upload

1. **Create Archive:**
   - In Xcode: **Product → Archive**
   - Wait for build to complete

2. **Distribute:**
   - Click **Distribute App**
   - Choose distribution method:
     - **App Store Connect** (for App Store)
     - **Ad Hoc** (for testing)
     - **Enterprise** (for enterprise distribution)
     - **Development** (for development builds)

3. **Upload to App Store Connect:**
   - Follow the prompts to upload
   - Complete app information in App Store Connect
   - Submit for review

## 🧑‍💻 Development Workflow

### Web Development

For rapid web development without iOS build:
```bash
npm run dev
```
Open `http://localhost:3000` in browser.

### iOS Development

1. Make changes to React/Next.js code
2. Rebuild and sync:
   ```bash
   npm run build:ios
   ```
3. Test in Xcode simulator or device

### Hot Reload

Capacitor supports live reload during development:
1. Keep `npm run dev` running
2. In `capacitor.config.ts`, set `server.url` to your local dev server
3. Run the app from Xcode - changes will hot reload

## 📸 Screenshots

_Screenshots will be added here after App Store submission_

## 🔍 Troubleshooting

### CocoaPods Issues

If you encounter CocoaPods errors:
```bash
cd ios/App
pod deintegrate
pod install
cd ../..
```

### Build Errors

1. **Clean build folder**: In Xcode, **Product → Clean Build Folder** (`Cmd + Shift + K`)
2. **Reset package cache**: `rm -rf node_modules package-lock.json && npm install`
3. **Re-sync Capacitor**: `npx cap sync ios`

### Xcode Signing Issues

- Ensure you have a valid Apple Developer account
- Select the correct team in Signing & Capabilities
- For simulator builds, signing is automatic

## 📝 License

This project is for demonstration purposes only. All data is simulated.

## ⚠️ Important Notes

- **No real functionality**: This is a frontend simulation only
- **No backend**: All data is generated client-side
- **No real transactions**: All blockchain data is fake
- **For demonstration only**: Not intended for production use with real data
- **iOS only**: This project is configured for iOS. Android support can be added with `npx cap add android`

---

Built with ❤️ using Next.js, Capacitor, and TailwindCSS
