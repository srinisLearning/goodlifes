'use client';
import Image  from 'next/image';
export default function Loading() {
    return (
      <>
        <style jsx>{`
          .loader {
            border: 16px solid #f3f3f3;
            border-top: 16px solid #3498db;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            animation: spin 1s linear infinite;
            margin: auto;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(90deg);
            }
            50% {
              transform: rotate(180deg);
            }
              75% {
              transform: rotate(270deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
        <div className="flex gap-6">
          <div className="loader"></div>
          <div>
            <Image
              src="/images/logo.png"
              alt="Good Lifes"
              width={200}
              height={150}
            />
          </div>
        </div>
      </>
    );
  }